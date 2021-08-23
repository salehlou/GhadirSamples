import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FLAT_TREE_DATA } from 'src/app/_mock-data/flat-tree-data';
import { FlatNode } from 'src/app/_models/flatNode.model';
import { TreeData } from 'src/app/_models/tree-data.model';
import { TreeModel } from 'src/app/_models/tree.model';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss']
})
export class FlatComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  subscription: Subscription | undefined;
  selectionTree = new SelectionModel<TreeModel>(false, []);

  dataChange = new BehaviorSubject<TreeModel[]>([]);
  responseTree: TreeModel[] = [
    {
      id: 0,
      name: 'string',
      checked: false,
      iconId: 'string',
      write: false,
      children: [],
    }
  ];
  sendResponse: TreeData[] = [
    {
      checked: false,
      iconId: '',
      id: 0,
      name: '',
      parentId: 0,
      write: false
    }
  ];

  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<TreeModel, FlatNode>;
  dataSource: MatTreeFlatDataSource<TreeModel, FlatNode>;
  checklistSelection = new SelectionModel<FlatNode>(true);

  currentRow = -1;
  constructor() {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.sendResponse = FLAT_TREE_DATA.data;
    this.responseTree = this.getNodeChildren(0, FLAT_TREE_DATA.data);
    this.dataChange.next(this.responseTree);
    if (this.treeControl.dataNodes) {
      this.checklistSelection.select(...this.treeControl.dataNodes.filter((node) => node.checked));
    }

    // this.subscription = this.rolesService.selecedRoleId.subscribe(() => {
    //   this.rolesService.getList(1).subscribe(
    //     res => {
    //       if (res.success) {
    //         this.sendResponse = res.data;
    //         this.responseTree = this.getNodeChildren(0, res.data);
    //         this.dataChange.next(this.responseTree);
    //         this.checklistSelection.select(...this.treeControl.dataNodes.filter((node) => node.checked));
    //         this.treeControl.expandAll();
    //       } else {
    //         console.log(res.message);
    //       }
    //     });
    // });
  }
  getLevel = (node: FlatNode) => node.level;
  isExpandable = (node: FlatNode) => node.expandable;
  getChildren = (node: TreeModel): TreeModel[] => node.children;
  hasChild = (_: number, nodeData: FlatNode) => nodeData.expandable;
  ngOnInit() {
    this.dataChange.subscribe(data => {
      this.dataSource.data = data;
      this.checklistSelection.select(...this.treeControl.dataNodes.filter((node) => node.checked));
      this.treeControl.expandAll();
    });
  }

  ngOnDestroy() {
    this.dataChange.unsubscribe();
    (this.subscription) ? this.subscription.unsubscribe() : null;
  }

  getNodeChildren(parentId: number, treeData: TreeData[]): TreeModel[] {
    const result = treeData.filter((data) => data.parentId === parentId);
    if (result.length === 0) {
      return result.map<TreeModel>((data) => {
        return { id: data.id, name: data.name, checked: data.checked, write: data.write, iconId: data.iconId, children: [] };
      });
    } else {
      return result.map<TreeModel>((data) => {
        return { id: data.id, name: data.name, checked: data.checked, write: data.write, iconId: data.iconId, children: this.getNodeChildren(data.id, treeData) };
      });
    }
  }

  transformer = (node: TreeModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id, name: node.name, level, checked: node.checked, write: node.write, iconId: node.iconId,
    };
  }

  descendantsAllSelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => this.checklistSelection.isSelected(child));
    return descAllSelected;
  }

  descendantsPartiallySelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  itemSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    this.checkAllParentsSelection(node);
  }

  leafItemSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: FlatNode): void {
    let parent: FlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: FlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: FlatNode): FlatNode | null {
    const currentLevel = this.getLevel(node);
    if (currentLevel < 1) { return null; }
    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }


  changeStatusWrite(node: FlatNode) {

    let currentNode = this.sendResponse.find(x => x.id == node.id);
    if (currentNode) {
      currentNode.write = !currentNode.write;
      this.responseTree = this.getNodeChildren(0, this.sendResponse);
    }

  }

  changeStatusChecked(node: FlatNode) {
    (this.sendResponse) ? this.sendResponse[node.id - 1].checked = !this.sendResponse[node.id - 1].checked : null;
    (this.sendResponse) ? this.responseTree = this.getNodeChildren(0, this.sendResponse) : null;
  }



  filterChanged(filterText: string) {
    this.filter(filterText);
    this.treeControl.expandAll();
  }

  filter(filterText: string) {
    let filteredTreeData;
    if (this.responseTree) {
      if (filterText) { filteredTreeData = this.getObjects(this.responseTree, filterText) }
      else { filteredTreeData = this.responseTree; }
      this.dataChange.next(filteredTreeData);
    }

  }


  getObjects(array: TreeModel[], target: string) {
    return array.reduce((r, { id, name, checked, iconId, write, children = [] }) => {
      children = this.getObjects(children, target);
      if (name.includes(target)) {
        r.push();
        return r;
      }
      if (children.length) {
        r.push();
      }
      return r;
    }, []);
  }


  save() {

    console.log(this.sendResponse);

  }


}
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FlatNode } from 'src/app/_models/flatNode.model';
import { TreeData } from 'src/app/_models/tree-data.model';
import { TreeModel } from 'src/app/_models/tree.model';
import { TreeService } from 'src/app/_services/tree.service';

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
  responseTree: TreeModel[] = [];
  sendResponse: TreeData[] = [];
  olddata: TreeData[] = [];

  searchBoxValue: string = '';
  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<TreeModel, FlatNode>;
  dataSource: MatTreeFlatDataSource<TreeModel, FlatNode>;
  checklistSelection = new SelectionModel<FlatNode>(true);

  currentRow = -1;
  constructor(private treeService: TreeService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.dataChange.subscribe(data => {
      this.dataSource.data = data;
      this.checklistSelection.select(...this.treeControl.dataNodes.filter((node) => node.checked));
      this.treeControl.expandAll();
    });


    //this.subscription = this.rolesService.selecedRoleId.subscribe(() => {
    this.treeService.getList().then(
      (res: any) => {
        if (res) {

          this.olddata = res;
          this.sendResponse = res;

          this.responseTree = this.getNodeChildren(0, res);
          this.dataChange.next(this.responseTree);
          // if (this.treeControl.dataNodes) {
          //   this.checklistSelection.select(...this.treeControl.dataNodes.filter((node) => node.checked));
          // }

          //this.treeControl.expandAll();
        } else {
          console.log(res);
        }
      });
    //});
  }
  getLevel = (node: FlatNode) => node.level;
  isExpandable = (node: FlatNode) => node.expandable;
  getChildren = (node: TreeModel): TreeModel[] => node.children;
  hasChild = (_: number, nodeData: FlatNode) => nodeData.expandable;
  ngOnInit() {

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
    this.toggleReadStatus(node);

    const descendants = this.treeControl.getDescendants(node);

    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

      descendants.forEach((item,index)=>{
        this.toggleReadStatus(item);
      })

    this.checkAllParentsSelection(node);
  }

  leafItemSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    this.toggleReadStatus(node);

    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: FlatNode): void {
    let parent: FlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      this.toggleReadStatus(parent);
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


  toggleWriteStatus(node: FlatNode) {
    let currentNode = this.sendResponse.find(x => x.id == node.id);
    if (currentNode) {
      currentNode.write = !currentNode.write;
      this.responseTree = this.getNodeChildren(0, this.sendResponse);
    }
  }

  toggleReadStatus(node: FlatNode) {
    let currentNode = this.sendResponse.find(x => x.id == node.id);
    if (currentNode) {
      currentNode.checked = !node.checked;
      this.responseTree = this.getNodeChildren(0, this.sendResponse);
    }
  }


  filterChanged(filterText: string) {
    this.filter(this.searchBoxValue);
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
    console.log('sendResponse', this.sendResponse);
    //console.log('responseTree', this.responseTree);
  }

  reset() {
    this.responseTree = this.getNodeChildren(0, this.olddata);
    this.dataChange.next(this.responseTree);


    //console.log('treeControl', this.treeControl);
    //console.log('dataSource', this.dataSource);
  }

}
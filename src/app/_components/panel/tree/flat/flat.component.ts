import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { BehaviorSubject, of, Subscription } from 'rxjs';
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
  olddata: TreeData[] = [];

  searchBoxValue: string = '';
  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<TreeModel, FlatNode>;
  dataSource: MatTreeFlatDataSource<TreeModel, FlatNode>;
  checkListSelection = new SelectionModel<FlatNode>(true);

  currentRow = -1;
  constructor(private treeService: TreeService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.dataChange.subscribe(data => {
      this.dataSource.data = data;
      this.checkListSelection.select(...this.treeControl.dataNodes.filter((node) => node.read));
      this.treeControl.expandAll();
    });


    //this.subscription = this.rolesService.selecedRoleId.subscribe(() => {
    this.treeService.getList().then(
      (res: any) => {
        if (res) {

          this.olddata = res;

          this.responseTree = this.getNodeChildren(0, res);
          this.dataChange.next(this.responseTree);
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
        return { id: data.id, name: data.name, read: data.read, write: data.write, iconId: data.iconId, children: [] };
      });
    } else {
      return result.map<TreeModel>((data) => {
        return { id: data.id, name: data.name, read: data.read, write: data.write, iconId: data.iconId, children: this.getNodeChildren(data.id, treeData) };
      });
    }
  }

  transformer = (node: TreeModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id, name: node.name, level, read: node.read, write: node.write, iconId: node.iconId,
    };
  }

  descendantsAllSelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => this.checkListSelection.isSelected(child));
    return descAllSelected;
  }

  descendantsPartiallySelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) => this.checkListSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  itemSelectionToggle(node: FlatNode): void {
    this.checkListSelection.toggle(node);

    const descendants = this.treeControl.getDescendants(node);

    if (this.checkListSelection.isSelected(node)) {
      this.checkListSelection.select(...descendants);
      this.toggleReadStatus(node, true);
      descendants.forEach((item, index) => {
        this.toggleReadStatus(item, true);
      })
    }
    else {
      this.checkListSelection.deselect(...descendants);
      this.toggleReadStatus(node, false);
      descendants.forEach((item, index) => {
        this.toggleReadStatus(item, false);
      })
    }

    this.checkAllParentsSelection(node);
  }

  leafItemSelectionToggle(node: FlatNode): void {
    this.checkListSelection.toggle(node);
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
    const nodeSelected = this.checkListSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checkListSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checkListSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checkListSelection.select(node);
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

  toggleReadStatus(node: FlatNode, toggle?: boolean) {
    let currentNode = this.treeControl.dataNodes.find(x => x.id == node.id);
    if (currentNode) {

      if (toggle == null) {
        currentNode.read = !currentNode.read;
      } else {
        currentNode.read = toggle;
      }

      if (currentNode.read == false) {
        currentNode.write = false;
      }

    }
  }

  toggleWriteStatus(node: FlatNode) {
    let currentNode = this.treeControl.dataNodes.find(x => x.id == node.id);
    if (currentNode) {
      currentNode.write = !currentNode.write;
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
    return array.reduce((r, { id, name, read: checked, iconId, write, children = [] }) => {
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
    //console.log('responseTree', this.responseTree);
    //console.log('this.checklistSelection.selected', this.checkListSelection.selected);

    //console.log('treeControll', this.treeControl);

    let nodesWithReadStatus = this.treeControl.dataNodes.filter(c => c.read == true);
    console.log('nodesWithReadStatus:', nodesWithReadStatus);

    let nodesWithWriteStatus = this.treeControl.dataNodes.filter(c => c.write == true);
    console.log('nodesWithWriteStatus:', nodesWithWriteStatus);

  }

  reset() {
    this.responseTree = this.getNodeChildren(0, this.olddata);
    this.dataChange.next(this.responseTree);


    //console.log('treeControl', this.treeControl);
    //console.log('dataSource', this.dataSource);
  }

}
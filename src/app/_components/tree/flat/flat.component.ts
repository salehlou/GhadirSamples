import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { FlatNode } from 'src/app/_models/flatNode.model';
import { TreeData } from 'src/app/_models/tree-data.model';
import { TreeModel } from 'src/app/_models/tree.model';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss']
})
export class FlatComponent implements OnInit {

  dataChange = new BehaviorSubject<TreeModel[]>([]);
  sendResponse: TreeData[] =[];
  responseTree: TreeModel[] = [];

  selectionTree = new SelectionModel<TreeModel>(false, []);
  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<TreeModel, FlatNode>;
  dataSource: MatTreeFlatDataSource<TreeModel, FlatNode>;
  checklistSelection = new SelectionModel<FlatNode>(true);

  getLevel = (node: FlatNode) => node.level;
  isExpandable = (node: FlatNode) => node.expandable;
  getChildren = (node: TreeModel): TreeModel[] => node.children;
  hasChild = (_: number, nodeData: FlatNode) => nodeData.expandable;

  constructor() {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit(): void {
  }

  getNodeChildren(parentId: number, treeData: TreeData[]): TreeModel[] {
    const result = treeData.filter((data) => data.parentId === parentId);
    if (result.length === 0) {
      return result.map<TreeModel>(data => {
        return { id: data.id, name: data.name, checked: data.checked, write: data.write, iconId: data.iconId, };
      });
    } else {
      return result.map<TreeModel>(data => {
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
    this.sendResponse[node.id - 1].write = !this.sendResponse[node.id - 1].write;
    this.responseTree = this.getNodeChildren(0, this.sendResponse);
  }
  filterChanged(filterText: string) {
    this.filter(filterText);
    this.treeControl.expandAll();
  }

  filter(filterText: string) {
    // let filteredTreeData;
    // if (filterText) { filteredTreeData = this.getObjects(this.responseTree, filterText); }
    // else { filteredTreeData = this.responseTree; }
    // this.dataChange.next(filteredTreeData);
  }

  getObjects(array: any[], target: string) {
    return array.reduce((r, { id, name, checked, iconId, write, children = [] }) => {
      children = this.getObjects(children, target);
      if (name.includes(target)) {
        r.push({ id, name, checked, iconId, write, children });
        return r;
      }
      if (children.length) {
        r.push({ id, name, checked, iconId, write, children });
      }
      return r;
    }, []);
  }
}

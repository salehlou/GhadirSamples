import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NESTED_TREE_DATA } from 'src/app/_mock-data/nested-tree-data';
import { FoodNode } from 'src/app/_models/food-node.model';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  count = 0;

  constructor() {
    this.dataSource.data = NESTED_TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  clickedActive(element: FoodNode) {
    element.checked = !element.checked;
  }


  changeState(data: any) {
    data.expanded = !data.expanded;
  }
  getCheckedAmount(data: FoodNode) {
    this.count = 0; // resetting count
    this.loopData(data.children);
    return this.count;
  }
  loopData(data: FoodNode[]) {
    data.forEach(d => {
      if (d.checked) {
        this.count += 1;
      }
      if (d.children && d.children.length > 0) {
        this.loopData(d.children);
      }
    });
  }
}




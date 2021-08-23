import { TreeModel } from './../_models/tree.model';
import { Injectable } from '@angular/core';
import { FLAT_TREE_DATA } from '../_mock-data/flat-tree-data';
import { TreeData } from '../_models/tree-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  constructor() { }


  getList() {

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(FLAT_TREE_DATA.data);
      }, 1000);
    });
  }
}

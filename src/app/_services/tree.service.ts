import { Injectable } from '@angular/core';
import { FLAT_TREE_DATA } from '../_mock-data/flat-tree-data';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  constructor() { }


  getFlatList() {
    return FLAT_TREE_DATA;
  }
}

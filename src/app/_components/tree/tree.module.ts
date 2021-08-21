import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { FlatComponent } from './flat/flat.component';
import { NestedComponent } from './nested/nested.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    TreeComponent,
    FlatComponent,
    NestedComponent,
  ],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MaterialModule
  ]
})
export class TreeModule { }

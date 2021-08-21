import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { FlatComponent } from './flat/flat.component';
import { NestedComponent } from './nested/nested.component';
import { MaterialModule } from 'src/app/material.module';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [
    TreeComponent,
    FlatComponent,
    NestedComponent,
    SampleComponent,
  ],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MaterialModule
  ]
})
export class TreeModule { }

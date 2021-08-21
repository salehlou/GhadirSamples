import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { GroupingComponent } from './grouping/grouping.component';
import { SimpleComponent } from './simple/simple.component';
import { ExpandedComponent } from './expanded/expanded.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    TableComponent,
    GroupingComponent,
    SimpleComponent,
    ExpandedComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule
  ]
})
export class TableModule { }

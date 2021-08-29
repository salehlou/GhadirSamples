import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { GroupingComponent } from './grouping/grouping.component';
import { SimpleComponent } from './simple/simple.component';
import { ExpandedComponent } from './expanded/expanded.component';
import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TableComponent,
    GroupingComponent,
    SimpleComponent,
    ExpandedComponent
  ],
  imports: [
    TableRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class TableModule { }

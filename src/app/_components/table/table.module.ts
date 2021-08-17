import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { GroupingComponent } from './grouping/grouping.component';
import { SimpleComponent } from './simple/simple.component';
import { ExpandedComponent } from './expanded/expanded.component';
import { MaterialModule } from 'src/app/material.module';
import { JalaliMomentsPipe } from 'src/app/_pip/jalali-moment.pipe';


@NgModule({
  declarations: [
    TableComponent,
    GroupingComponent,
    SimpleComponent,
    ExpandedComponent,
    JalaliMomentsPipe

  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule
  ]
})
export class TableModule { }

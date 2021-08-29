import { CdkTreeFlatSimpleComponent } from './cdk-tree-flat-simple/cdk-tree-flat-simple.component';
import { CommonModule } from '@angular/common';
import { FlatComponent } from './flat/flat.component';
import { NestedComponent } from './nested/nested.component';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { SharedModule } from 'src/app/shared.module';
import { TreeComponent } from './tree.component';
import { TreeRoutingModule } from './tree-routing.module';



@NgModule({
  declarations: [
    CdkTreeFlatSimpleComponent,
    FlatComponent,
    NestedComponent,
    SampleComponent,
    TreeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TreeRoutingModule,
  ]
})
export class TreeModule { }

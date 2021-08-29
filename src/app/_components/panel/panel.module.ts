import { NgModule } from '@angular/core';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { SharedModule } from 'src/app/shared.module';
import { OthersComponent } from './others/others.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PanelComponent,
    OthersComponent
  ],
  imports: [
    PanelRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class PanelModule { }

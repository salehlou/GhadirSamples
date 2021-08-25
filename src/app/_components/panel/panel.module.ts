import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { MaterialModule } from 'src/app/material.module';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [
    PanelComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule
  ]
})
export class PanelModule { }

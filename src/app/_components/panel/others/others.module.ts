import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesampleComponent } from './badgesample/badgesample.component';
import { MaterialModule } from 'src/app/material.module';
import { OthersRoutingModule } from './others-routing.module';

@NgModule({
  declarations: [
    BadgesampleComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule,
    MaterialModule
  ]
})
export class OthersModule { }

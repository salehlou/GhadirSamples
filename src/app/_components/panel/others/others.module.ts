import { NgModule } from '@angular/core';

import { BadgesampleComponent } from './badgesample/badgesample.component';
import { OthersRoutingModule } from './others-routing.module';

import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';
import { DataTimeComponent } from './data-time/data-time.component';


@NgModule({
  declarations: [
    BadgesampleComponent,
    DataTimeComponent,

  ],
  imports: [

    OthersRoutingModule,
    SharedModule,
    CommonModule,
  ],
  providers: [

  ]
})
export class OthersModule { }

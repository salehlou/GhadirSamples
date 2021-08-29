import { NgModule } from '@angular/core';

import { BadgesampleComponent } from './badgesample/badgesample.component';
import { OthersRoutingModule } from './others-routing.module';

import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BadgesampleComponent,

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

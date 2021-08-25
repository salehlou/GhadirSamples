import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesampleComponent } from './badgesample/badgesample.component';
import { OthersComponent } from './others.component';

const routes: Routes = [

  {
    path: '', component: OthersComponent, children: [

      { path: 'badge', component: BadgesampleComponent, data: { returnUrl: window.location.pathname } },

      { path: '', redirectTo: 'badge', pathMatch: 'full' },
      { path: '**', redirectTo: 'badge', pathMatch: 'full' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [

  {
    path: '',
    component: PanelComponent,
    children: [

      { path: 'tree', loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule) },
      { path: 'table', loadChildren: () => import('./table/table.module').then((m) => m.TableModule) },
      { path: 'others', loadChildren: () => import('./others/others.module').then((m) => m.OthersModule) },


      { path: '', redirectTo: 'others', pathMatch: 'full' },
      { path: '**', redirectTo: 'others', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }

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

      { path: '', redirectTo: 'tree', pathMatch: 'full' },
      { path: '**', redirectTo: 'tree', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }

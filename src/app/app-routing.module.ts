import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tree', loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule) },
  { path: 'table', loadChildren: () => import('./table/table.module').then((m) => m.TableModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

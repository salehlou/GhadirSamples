import { TableModule } from './_components/table/table.module';
import { TreeModule } from './_components/tree/tree.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tree', loadChildren: () => import('./_components/tree/tree.module').then((m) => m.TreeModule) },
  { path: 'table', loadChildren: () => import('./_components/table/table.module').then((m) => m.TableModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

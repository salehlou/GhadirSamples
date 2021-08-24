import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandedComponent } from './expanded/expanded.component';
import { GroupingComponent } from './grouping/grouping.component';
import { SimpleComponent } from './simple/simple.component';
import { TableComponent } from './table.component';

const routes: Routes = [

  {
    path: '', component: TableComponent, children: [

      { path: 'simple', component: SimpleComponent, data: { returnUrl: window.location.pathname } },
      { path: 'grouping', component: GroupingComponent, data: { returnUrl: window.location.pathname } },
      { path: 'expanded', component: ExpandedComponent, data: { returnUrl: window.location.pathname } },

      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple', pathMatch: 'full' },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

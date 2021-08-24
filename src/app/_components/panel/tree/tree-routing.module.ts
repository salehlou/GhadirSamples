import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTreeFlatSimpleComponent } from './cdk-tree-flat-simple/cdk-tree-flat-simple.component';
import { FlatComponent } from './flat/flat.component';
import { NestedComponent } from './nested/nested.component';
import { SampleComponent } from './sample/sample.component';
import { TreeComponent } from './tree.component';

const routes: Routes = [


  {
    path: '', component: TreeComponent, children: [

      { path: 'flat', component: FlatComponent, data: { returnUrl: window.location.pathname } },
      { path: 'cdkflat', component: CdkTreeFlatSimpleComponent, data: { returnUrl: window.location.pathname } },
      { path: 'sample', component: SampleComponent, data: { returnUrl: window.location.pathname } },
      { path: 'nested', component: NestedComponent, data: { returnUrl: window.location.pathname } },

      { path: '', redirectTo: 'flat', pathMatch: 'full' },
      { path: '**', redirectTo: 'flat', pathMatch: 'full' },

    ],
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }

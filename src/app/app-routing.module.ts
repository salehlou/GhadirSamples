import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./_components/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'panel', loadChildren: () => import('./_components/panel/panel.module').then((m) => m.PanelModule) },

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

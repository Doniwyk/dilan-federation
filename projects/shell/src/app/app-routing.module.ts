// filepath: /d:/Doni/dilan/dilan/projects/shell/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
      { path: 'pallet-drum', loadChildren: () => import('projects/mfe1/src/app/pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
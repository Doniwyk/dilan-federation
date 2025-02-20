// filepath: /d:/Doni/dilan/dilan/projects/shell/src/app/pages/pages-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'rmpm', loadChildren: () => import('./rmpm/rmpm.module').then(m => m.RmpmModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
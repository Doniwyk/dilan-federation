// filepath: /d:/Doni/dilan/dilan/projects/shell/src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PagesComponent }])
  ]
})
export class PagesModule { }
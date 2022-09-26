import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesagesRoutingModule } from './mesages-routing.module';
import { PageEditMesageComponent } from './pages/page-edit-mesage/page-edit-mesage.component';
import { PageListMesagesComponent } from './pages/page-list-mesages/page-list-mesages.component';
import { PageAddMesageComponent } from './pages/page-add-mesage/page-add-mesage.component';


@NgModule({
  declarations: [
    PageEditMesageComponent,
    PageListMesagesComponent,
    PageAddMesageComponent
  ],
  imports: [
    CommonModule,
    MesagesRoutingModule
  ]
})
export class MesagesModule { }

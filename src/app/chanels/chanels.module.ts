import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChanelsRoutingModule } from './chanels-routing.module';
import { PageListChanelsComponent } from './pages/page-list-chanels/page-list-chanels.component';
import { PageAddChanelComponent } from './pages/page-add-chanel/page-add-chanel.component';
import { PageEditChanelComponent } from './pages/page-edit-chanel/page-edit-chanel.component';


@NgModule({
  declarations: [
    PageListChanelsComponent,
    PageAddChanelComponent,
    PageEditChanelComponent
  ],
  imports: [
    CommonModule,
    ChanelsRoutingModule
  ]
})
export class ChanelsModule { }

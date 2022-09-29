import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChanelsRoutingModule } from './chanels-routing.module';
import { PageAddChanelComponent } from './pages/page-add-chanel/page-add-chanel.component';
import { PageEditChanelComponent } from './pages/page-edit-chanel/page-edit-chanel.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { FormMessageComponent } from './components/form-message/form-message.component';


@NgModule({
  declarations: [
    PageAddChanelComponent,
    PageEditChanelComponent,
    PageListMessagesComponent,
    FormMessageComponent
  ],
  imports: [
    CommonModule,
      ChanelsRoutingModule
  ],
  exports: [
    PageListMessagesComponent,
    FormMessageComponent
  ]
})
export class ChanelsModule { }

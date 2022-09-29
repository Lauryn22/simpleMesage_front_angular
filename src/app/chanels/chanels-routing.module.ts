import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { PageAddChanelComponent } from './pages/page-add-chanel/page-add-chanel.component';
import { PageEditChanelComponent } from './pages/page-edit-chanel/page-edit-chanel.component';

const routes: Routes = [
  { path: '', component: PageListMessagesComponent },
  { path: 'add', component: PageAddChanelComponent },
  { path: 'edit', component: PageEditChanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChanelsRoutingModule { }

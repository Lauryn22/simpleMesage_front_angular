import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListMessagesComponent } from './chanels/pages/page-list-messages/page-list-messages.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: PageListMessagesComponent},
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

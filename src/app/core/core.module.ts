import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ChanelsModule } from '../chanels/chanels.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,RouterModule

  ],
  exports: [UiModule, FooterComponent, HeaderComponent, NavComponent, ChanelsModule]
})
export class CoreModule { }

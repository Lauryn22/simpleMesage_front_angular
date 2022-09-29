import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconOpenComponent } from './components/icon-open/icon-open.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconOpenComponent,
    IconNavComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconCloseComponent,
    IconOpenComponent,
    IconNavComponent
  ]
})
export class IconsModule { }

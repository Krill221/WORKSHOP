import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule, HeaderModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }

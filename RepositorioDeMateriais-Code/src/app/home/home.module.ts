import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class CursosModule { }

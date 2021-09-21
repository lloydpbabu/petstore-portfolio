import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class SharedModule { }

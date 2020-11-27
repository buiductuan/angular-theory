import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { SharedModules } from '../shared/shared.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    SharedModules,
    RouterModule.forChild([{
      path: '',
      component: LazyComponent
    }]),
  ]
})
export class LazyModule { }

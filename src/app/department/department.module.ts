import { NgModule } from '@angular/core';
import { DepartmentComponent } from './department.component';
import { RouterModule } from '@angular/router';
import { SharedModules } from '../shared/shared.module';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    SharedModules,
    RouterModule.forChild([{
      path: '',
      component: DepartmentComponent
    }])
  ]
})
export class DepartmentModule { }

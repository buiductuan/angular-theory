import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { SharedModules } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    SharedModules,
    RouterModule.forChild([{
      path: '',
      component: EmployeeComponent
    }])
  ]
})
export class EmployeeModule { }

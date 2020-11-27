import { Component, Injector, OnInit } from '@angular/core';
import { LazyServices } from '../services/lazy.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  lazyService: LazyServices;
  loadSharedComponent = false;
  constructor(injector: Injector) {
    this.lazyService = injector.get(LazyServices);
  }

  ngOnInit(): void {
    console.log(this.lazyService.onFakeApiCAll());
  }

}

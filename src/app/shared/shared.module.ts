import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { LazyServices } from '../services/lazy.service';
import { SharedComponentComponent } from '../shared-component/shared-component.component';

@NgModule({
  declarations: [
    SharedComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,

    SharedComponentComponent
  ],
  providers: [LazyServices]
})

export class SharedModules { }

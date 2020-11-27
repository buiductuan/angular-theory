import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedLazyComponentComponent } from './shared-lazy-component.component';

@NgModule({
  declarations: [SharedLazyComponentComponent],
  imports: [ButtonModule],
  exports: [SharedLazyComponentComponent]
})
export class SharedLazyComponentModule { }

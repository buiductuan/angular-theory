import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async onLoadLazyComponent(): Promise<void> {
    this.vcref.clear();
    const { SharedLazyComponentComponent } = await import('../shared-lazy-component/shared-lazy-component.component');
    this.vcref.createComponent(this.cfr.resolveComponentFactory(SharedLazyComponentComponent));
  }

}

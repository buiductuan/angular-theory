import { Component, ComponentFactoryResolver, Injector, NgModule, NgModuleRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AutoUnsubscribe } from '../decorators/unsubscribe.decorator';
import { LazyServices } from '../services/lazy.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, OnDestroy {

  lazyService: LazyServices;

  pokemons: any[];

  @ViewChild('cmpLazy', { read: ViewContainerRef })
  private lazyVcref: ViewContainerRef;


  constructor(injector: Injector, private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) {
    this.lazyService = injector.get(LazyServices);
  }

  private onSearchPokemons(): void {
    this.lazyService.onPokemonList()
      .subscribe(res => {
        console.log(res);
        this.pokemons = res.results;
      });
  }

  ngOnInit(): void {
    console.log(this.lazyService.onFakeApiCAll());
    this.onSearchPokemons();
  }

  async onLoadLazyComponent(): Promise<void> {
    this.vcref.clear();
    const { SharedLazyComponentComponent } = await import('../shared-lazy-component/shared-lazy-component.component');
    const component = this.vcref.createComponent(this.cfr.resolveComponentFactory(SharedLazyComponentComponent));
    component.instance.title = 'Append last document';
  }

  async onLoadLazyComponentTemplate(): Promise<void> {
    this.lazyVcref.clear();
    const { SharedLazyComponentComponent } = await import('../shared-lazy-component/shared-lazy-component.component');
    const component = this.lazyVcref.createComponent(
      this.cfr.resolveComponentFactory(SharedLazyComponentComponent), null, null, null,
      );
    component.instance.title = 'Load template';
    component.instance.toggleEvent.subscribe(data => {
      const div = document.getElementById('toggleLazyChildComponent');
      div.innerText = data;
    });
  }

  ngOnDestroy(): void {

  }
}

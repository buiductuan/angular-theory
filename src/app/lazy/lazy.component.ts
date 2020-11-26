import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { LazyServices } from '../services/lazy.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  lazyService: LazyServices;

  pokemons: any[];

  constructor(injector: Injector, private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) {
    this.lazyService = injector.get(LazyServices);
  }

  private onSearchPokemons(): void {
    this.lazyService.onPokemonList().subscribe(res => {
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
    this.vcref.createComponent(this.cfr.resolveComponentFactory(SharedLazyComponentComponent));
  }

}

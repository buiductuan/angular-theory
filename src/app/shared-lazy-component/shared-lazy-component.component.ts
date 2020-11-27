import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shared-lazy-component',
  templateUrl: './shared-lazy-component.component.html',
  styleUrls: ['./shared-lazy-component.component.css']
})
export class SharedLazyComponentComponent implements OnInit {


  title: string;

  @Output() toggleEvent = new EventEmitter<any>();

  constructor(private HTTP: HttpClient) { }

  ngOnInit(): void {
    console.log('SharedLazyComponentComponent init');

    this.HTTP.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').pipe(map(json => json)).subscribe(res => {
      console.log(res);
    });
  }

  onToggle(): void {
    this.toggleEvent.emit('hola!!!');
  }

}

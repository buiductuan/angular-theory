import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shared-lazy-component',
  templateUrl: './shared-lazy-component.component.html',
  styleUrls: ['./shared-lazy-component.component.css']
})
export class SharedLazyComponentComponent implements OnInit {

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('SharedLazyComponentComponent init');

    this.HttpClient.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').pipe(map(json => json)).subscribe(res => {
      console.log(res);
    });

  }

}

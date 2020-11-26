import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'platform'
})
export class LazyServices {

  private POKEMON_API_ENTRY_POINT = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {

  }

  onFakeApiCAll(): string {
    return 'call api from hell';
  }

  onPokemonList(limit: number = 10, offset: number = 0): Observable<any> {
    const searchAPI = `${this.POKEMON_API_ENTRY_POINT}pokemon?limit=${limit}&offset=${offset}`;
    return this.httpClient.get(searchAPI).pipe(map(response => response));
  }
}

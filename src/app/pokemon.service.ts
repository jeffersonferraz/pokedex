import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  //Pokemons abrufen
  getPokemon() {
    //Nur die ersten 150 Pokemons werden zurück gegeben
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  }

  //Pokemon Daten abrufen
  getPokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

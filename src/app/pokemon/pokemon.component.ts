import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemons: any[] = [];

  //PokemonService wird Injected
  constructor (
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {

    //Es werden nur die Pokemon namen von der RestAPI angezeigt
    this.pokemonService.getPokemon()
      .subscribe((response: any) => {

      //Es werden alle details über das Pokemon in einem Array gespeichert
      response.results.forEach((result: { name: string; }) => {
        this.pokemonService.getPokemonData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse)
            console.log(this.pokemons);
          });
        });
    });

  }

}
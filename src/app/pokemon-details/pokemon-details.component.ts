import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent{

  pokemon: any;

  constructor( 
    private pokemonService: PokemonService,
    private route: ActivatedRoute
    ) {}

    ngOnInit() {

      let name = this.route.snapshot.params['name'];

      this.pokemonService.getPokemonData(name)
        .subscribe((data) => (this.pokemon = data));
    }

}

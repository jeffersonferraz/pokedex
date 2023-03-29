import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInterface } from './pokemon/pokemon.interface';

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

  //Wenn die Searchbar leer ist, dann erscheinen alle Pokemon wieder
  transform(items: Array<PokemonInterface>, searchText: string): Array<PokemonInterface> {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter((item:PokemonInterface)=> item.name.includes(searchText)); 
  }
}

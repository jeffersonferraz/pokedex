import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //Wenn die Searchbar leer ist, dann erscheinen alle Pokemon wieder
  transform(value: any, searchText:string ) {
    if(searchText === '') {
      return value;
    }

    //Wenn die Searchbar einem Pokemon entspricht wird es angezeigt
    const pokemons = [];
    for(const pokemon of value) {
      if(pokemon['name'].includes(searchText)) {
        pokemons.push(pokemon)
      }
    }
    return pokemons;
  }

}

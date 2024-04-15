import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common'; // import module to use *NgIf=""
import { BorderCardDirective } from '../border-card.directive'; // Importez la directive depuis son emplacement: après l'avoir créé dans le terminl $ ng generate directive border-card
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color


@Component({
    selector: 'app-list-pokemons',
    standalone: true,
    imports: [Router, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
    templateUrl: './list-pokemons.component.html',
    styles: ``
  })
  export class ListPokemonsComponent {
    pokemonsList : Pokemon[] = POKEMONS; 
  
    constructor(private router: Router) {}; 

    goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['pokemon', pokemon.id]); 
    }
}

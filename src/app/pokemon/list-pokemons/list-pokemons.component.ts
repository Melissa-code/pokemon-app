import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
//import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common'; // import module to use *NgIf=""
import { BorderCardDirective } from '../border-card.directive'; // Importez la directive depuis son emplacement: après l'avoir créé dans le terminl $ ng generate directive border-card
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color
import { PokemonService } from '../pokemon.service';


@Component({
    selector: 'app-list-pokemons',
    standalone: true,
    imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
    templateUrl: './list-pokemons.component.html',
    styles: ``
  })
  export class ListPokemonsComponent implements OnInit {
    //pokemonsList : Pokemon[] = POKEMONS; 
    pokemonsList : Pokemon[];

    constructor(
      private router: Router, 
      private pokemonService: PokemonService
    ) {}; 

    // on get la methode du service 
    ngOnInit() {
      this.pokemonsList = this.pokemonService.getPokemonList();
    }

    goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['pokemon', pokemon.id]); 
    }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common'; // import module to use *NgIf=""
import { BorderCardDirective } from './border-card.directive'; // Importez la directive depuis son emplacement: après l'avoir créé dans le terminl $ ng generate directive border-card
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color

@Component({
  // Nom au composant pour l'identifier
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})

export class AppComponent implements OnInit{
  //pokemonsList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  pokemonsList : Pokemon[] = POKEMONS; 
  pokemonSelected: Pokemon|undefined;

  // Méthode associée au cycle de vie (ng: prefix)
  ngOnInit() {
    console.table(this.pokemonsList);
  }

  // le +() sert à caster en nombre
  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon) {
      console.log(`Vous avez cliqué sur le Pokemon ${pokemon.name}`)
      this.pokemonSelected = pokemon; 
    } else {
      console.log(`Vous avez cliqué sur un Pokemon qui n'existe pas`)
      this.pokemonSelected = pokemon; 
    }
  }
}

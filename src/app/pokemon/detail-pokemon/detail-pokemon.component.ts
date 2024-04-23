import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color
import { PokemonService } from '../pokemon.service';
import { EditPokemonComponent } from '../edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, EditPokemonComponent, PokemonFormComponent],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[]; 
  pokemon: Pokemon|undefined; 

  // injection service pour piloter les routes 
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // snapshot: pour avoir la donnée à l'instantée, parmaMap (tabl de param)
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); 

    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId); //+string en nombre
    }
  }

  /**
   * Go back to pokemon list 
   */
  goToPokemonsList() {
    this.router.navigate(['pokemons']); 
  }

  /**
   * Go to the form to edit a pokemon 
   * @param pokemon 
   */
    goToEditPokemon(pokemon: Pokemon) {
      this.router.navigate(['edit/pokemon', pokemon.id]); 
    }
}

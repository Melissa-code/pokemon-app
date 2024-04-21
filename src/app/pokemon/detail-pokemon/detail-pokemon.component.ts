import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
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
    // this.pokemonList = POKEMONS; 
    // snapshot: pour avoir la donnée à l'instantée, parmaMap (tabl de param)
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); 
    
    // attention au type ! +pour int
    //if (pokemonId) {
    //  this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId); 
    //} 

    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId); //+string en nombre
    }

  }

  /**
   * 
   */
  goToPokemonsList() {
    this.router.navigate(['pokemons']); 
  }
}

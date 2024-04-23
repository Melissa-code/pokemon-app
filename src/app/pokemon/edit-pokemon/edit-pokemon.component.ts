import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';


@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [PokemonFormComponent, CommonModule],
  template: `
    <h2 class="center">Modifier le pokemon {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <!-- if there is a pokemon, create the form -->
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent {

  // Get pokemon 
  pokemon: Pokemon|undefined; 

  constructor(
    private activatedRoute: ActivatedRoute, // to get id in URL 
    private pokemonService: PokemonService, 
  ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined; 
    }
  }
}

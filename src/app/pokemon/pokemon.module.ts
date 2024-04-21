import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // pour ngIf/ngFor
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

// Routes specifiques au pokemon 
const pokemonRoutes: Routes = [
   { path: 'pokemons', component: ListPokemonsComponent },
   { path: 'pokemon/:id', component: DetailPokemonComponent },
];


@NgModule({
  // déclarer au niveau de la fonctionnalité pokemon (!= login)
  declarations: [
    ListPokemonsComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule, 
    // Routes enfant pokemons et pokemon:id
    RouterModule.forChild(pokemonRoutes) 
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule { }

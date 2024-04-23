import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // pour ngIf/ngFor
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
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
    // ListPokemonsComponent,
    // DetailPokemonComponent,
    // BorderCardDirective,
    // PokemonTypeColorPipe,
    // PokemonFormComponent,
    // EditPokemonComponent
    
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    // Routes enfant pokemons et pokemon:id
    RouterModule.forChild(pokemonRoutes) 
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule { }

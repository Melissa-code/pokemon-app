import { Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// objet pour chaque route (pathMatch full: evite effects de bord entre routes )
// routes spécifiques en haut sinon écrasées 
export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonsComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, 
    // toutes les routes ** : 404 attention mettre cette route en dernier!!
    { path: '**', component: PageNotFoundComponent }, 
];

import { Injectable } from '@angular/core';// pour brancher ce service en injection de dépendance 
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// pas @service
// pour brancher ce service en injection de dépendance 
// dans ce service on peut injecter d'autres services 
@Injectable(
  //{
  //providedIn: 'root'
  // }
)
export class PokemonService {

  constructor() { }

  /**
   * Get the list of the pokemons
   * @returns constante POKEMONS (liste de Pokemon)
   */
  getPokemonList(): Pokemon[] {
    return POKEMONS; 
  }

  /**
   * Get pokemon by id 
   * find() return pokemon or undefined 
   * @param pokemonId 
   * @returns pokemon (object)
   */
  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  /**
   * Get the type of the pokemon 
   * @returns types (liste de string) 
   */
  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Elektric', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}

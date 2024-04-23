import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [PokemonTypeColorPipe, FormsModule, CommonModule],
  templateUrl: './pokemon-form.component.html',
  styles:['./pokemon-form.component.css']
})

export class PokemonFormComponent implements OnInit {
  // propriété pour composant : pokemon passé en entrée 
  @Input() pokemon: Pokemon; 
  types: string[]; 

  constructor(
    private pokemonService: PokemonService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    // Get the pokemonType list from the pokemonService 
    this.types = this.pokemonService.getPokemonTypeList(); 
  }
 
  /**
   * Check if the pokemon has the type in params
   * @param type 
   * @returns 
   */
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type); // type en parametre
  }

  /**
   * Check if the type is available in the code 
   * @param $event 
   * @param type 
   */
  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; 

    if (isChecked) {
      this.pokemon.types.push(type); //ajoute
    } else {
      const index = this.pokemon.types.indexOf(type); 
      this.pokemon.types.splice(index, 1); //Retire le type 
    }
  }

  /**
   * 
   * @param type 
   */
  isTypesValid(type: string): boolean {

    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      // block case 
      return false; // disable the checkbox 
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false; 
    }

    return true; 
  }

  /**
   * Message & redirection (Router) 
   */
  onsubmit() {
    console.log('Le formulaire a bien été soumis'); 
    this.router.navigate(['pokemon', this.pokemon.id]); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // import module to use *NgIf=""
import { BorderCardDirective } from './pokemon/border-card.directive'; // Importez la directive depuis son emplacement: après l'avoir créé dans le terminl $ ng generate directive border-card
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color

@Component({
  // Nom au composant pour l'identifier
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})

export class AppComponent {
  
}

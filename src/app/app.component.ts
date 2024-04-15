import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // import module to use *NgIf=""
import { BorderCardDirective } from './border-card.directive'; // Importez la directive depuis son emplacement: après l'avoir créé dans le terminl $ ng generate directive border-card
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe'; // Importez le pipe depuis son emplacement: après l'avoir créé dans terminal $ ng generate pipe pokemon-type-color
import { Router } from '@angular/router';

@Component({
  // Nom au composant pour l'identifier
  selector: 'app-root',
  standalone: true,
  imports: [Router, RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})

export class AppComponent {
  
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // directive d'attribut ([appBorderCard] on bind l'attribut de l'element du DOM)
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = "#f5f5f5"; 
  private defaultColor: string = "#009688"; 
  private defaultHeight: number = 180; 

  /**
   * import ElementRef (ref vers cards)
   * Pour chaque cards créées je définis une hauteur et bordure
   * @param el 
   */
  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor); 
  }

  // on déclare une propriété borderColor (pkmn devant pour éviter collision)
  @Input('pkmnBorderCard') borderColor: string; // avec alias 
  //@Input() pkmnBorderCard: string; // sans alias 

  /**
   * Event au survol de la card par la souris
   * on utilise propriété borderColor 
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  /**
   * hauteur commune pour toutes les cards
   * @param height 
   */
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`; 
  }

  /**
   * j'ajoute une bordure aux cards de Pokemons
   * @param color 
   */
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;  }
}

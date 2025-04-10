import { Component } from '@angular/core';

/**
 * Componente principal. Se trata del componente padre
 * de todos componentes privados de la aplicación. 
 * 
 * Contiene un layout específico que incluye el menú de la aplicación.
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  /**
   * Callapse var to open and close menu.
   */
  isMenuCollapsed = false;

  /**
   * Opoen and close function.
   */
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}

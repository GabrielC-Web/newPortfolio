import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gabriel-flex-room';

  /**
   * Items para el navbar
   */
  navItems: string[] = [
    'Inicio',
    'Proyectos',
    'Tecnologías'
  ]

  /**
   * Tema de color aplicado
   */
  themeClass: string  = 'dark-mode'

  /**
   * Body element que se encuentra en el index html de la aplicación
   */
  bodyElement: any

  constructor(){

  }

  ngOnInit(){
    this.bodyElement = document.getElementById('main')
    this.bodyElement.className = this.themeClass
  }

  /**
   * Cambia la clase del index html por la del tema de color
   * @param theme
   */
  applyTheme(theme: any){
    this.themeClass = theme.class
    this.bodyElement.className = this.themeClass
  }
}

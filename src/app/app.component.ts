import { Component } from '@angular/core';
import { THEMES } from 'src/environments/constants';
import { UtilitiesService } from './reusable/services/utilities.service';

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
  navItems: object[] = [
    {url:'Inicio', id: 0},
    {url:'Proyectos', id: 1},
    {url:'Tecnologías', id: 2},
    {url:'Contacto', id: 3},
  ]

  /**
   * Tema de color aplicado
   */
  themeClass: string  = ''

  /**
   * Body element que se encuentra en el index html de la aplicación
   */
  bodyElement: any

  constructor(
    private utilities: UtilitiesService
  ){

  }

  ngOnInit(){
    this.bodyElement = document.getElementById('main')
    this.retrieveTheme()
  }

  /**
   * Cambia la clase del index html por la del tema de color
   * @param theme
   */
  applyTheme(theme: any){
    this.themeClass = theme.class
    this.bodyElement.className = this.themeClass
  }



  /**
   * Obtiene el tema de color almacenado
   */
  retrieveTheme(){
    let theme: any = sessionStorage.getItem('theme-color')

    let readedTheme = JSON.parse(theme)

    if(readedTheme){
      this.applyTheme(readedTheme)
      this.utilities.updateSignal(readedTheme)
    } else{
      let initialTheme: any = THEMES[0]
      this.applyTheme(initialTheme)
      this.utilities.updateSignal(initialTheme)
    }
  }
}

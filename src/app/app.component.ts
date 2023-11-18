import { Component, HostListener } from '@angular/core';
import { THEMES } from 'src/environments/constants';
import { UtilitiesService } from './reusable/services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Título del proyecto
   */
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

  //? Lógica para detectar posición de scroll

  /**
   * Contiene los ids de los elementos  o secciones principales de la página
   */
  scrollBreakpointElements: any[] = ['Inicio', 'Proyectos', 'Tecnologías', 'Contacto']

  /**
   * Indica la posición actual de scroll
   */
  currentScrollY: number = window.scrollY

  /**
   * Indica en qué sección me encuentro
   */
  currentScrollSection: string = 'Inicio'

  /**
   * Escucho el evento de scroll
   * @param e
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {

    //* Obtengo la posición actual de scroll
    this.currentScrollY = window.scrollY

    //* Obtengo la sección en la que estoy parado de acuerdo al scroll
    this.getScrollSectionPosition()

  }

  constructor(
    private utilities: UtilitiesService
  ){

  }

  ngOnInit(){

    //* Obtengo la sección en la que estoy parado de acuerdo al scroll
    this.getScrollSectionPosition()

    //* Obtengo referencia al elemento principal
    this.bodyElement = document.getElementById('main')

    //*Obtengo el tema
    this.retrieveTheme()
  }

  /**
   * Cambia la clase del index html por la del tema de color
   * @param theme
   */
  applyTheme(theme: any){
    /**
     * Obtengo la clase que debo aplicar
     */
    this.themeClass = theme.class

    /**
     * Aplico la clase al bodyElement
     */
    this.bodyElement.className = this.themeClass
  }

  /**
   * Obtiene el tema de color almacenado
   */
  retrieveTheme(){

    //* Obtengo el tema guardado
    let theme: any = JSON.parse(sessionStorage.getItem('theme-color') as string)

    //* Si tengo tema, entonces lo aplico
    if(theme){
      //* Aplico el tema y envío la señal

      this.applyTheme(theme)

      this.utilities.updateSignal(theme)

    } else{
      //* Aplico el tema y envío la señal, es este caso obtengo el primero que exista

      let initialTheme: any = THEMES[0]

      this.applyTheme(initialTheme)

      this.utilities.updateSignal(initialTheme)

    }
  }

  //? Lógica para cambiar estilos de acuerdo al scroll

  /**
   * Obtiene la posición de scroll e indica en qué elemento estamos parados
   */
  getScrollSectionPosition() {
    this.currentScrollSection = this.utilities.getActiveSectionByScroll(this.scrollBreakpointElements, this.currentScrollY)
  }
}

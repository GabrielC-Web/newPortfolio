import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';
import { THEMES } from 'src/environments/constants';

@Component({
  selector: 'cool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Items a mostrar
   */
  @Input() navItems: any[] = []

  /**
   * Indica en qué sección de scroll nos encontramos
   */
  @Input() currentScrollSection: string = ''

  /**
   * Tema de color seleccionado
   */
  @Output() themeSelected: EventEmitter<any> = new EventEmitter()

  /**
   * Id del item de navegación
   */
  itemId!: number | null

  /**
   * Temas de color de la página
   */
  themes: any[] = THEMES

  constructor(
    private utilities: UtilitiesService
  ){

  }

  ngOnInit(){

  }

  /**
   * Setea el tema de color
   * @param theme
   */
  setThemeColor(theme: any){
    this.themeSelected.emit(theme)
    this.utilities.updateSignal(theme)

    sessionStorage.setItem('theme-color', JSON.stringify(theme))
  }

  /**
   * Cambia el valor del itemId, al item clickeado actualmente
   * @param id id del item
   */
  storeId(id: number){
    this.itemId = id
  }

}

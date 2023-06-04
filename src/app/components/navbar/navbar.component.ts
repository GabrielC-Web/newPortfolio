import { Component, EventEmitter, Input, Output } from '@angular/core';

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
   * Tema de color seleccionado
   */
  @Output() themeSelected: EventEmitter<any> = new EventEmitter()

  /**
   * Id del item de navegación
   */
  itemId!: number | null

  themes: any[] = [
    {
      color: '#333333',
      name: 'Soft Dark',
      class: 'dark-mode'
    },
    {
      color: '#333333',
      name: 'Light',
      class: 'light-mode'
    },
  ]

  constructor(){

  }

  ngOnInit(){

  }

  setThemeColor(theme: any){
    this.themeSelected.emit(theme)
  }

  /**
   * Cambia el valor del itemId, al item clickeado actualmente
   * @param id id del item
   */
  storeId(id: number){
    this.itemId = id
  }

}

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
  @Input() navItems: string[] = []

  /**
   * Tema de color seleccionado
   */
  @Output() themeSelected: EventEmitter<any> = new EventEmitter()

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

}

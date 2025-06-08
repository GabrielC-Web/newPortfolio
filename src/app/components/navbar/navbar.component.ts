import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeModel } from 'src/app/models/general.model';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';
import { THEMES } from 'src/environments/constants';

@Component({
  selector: 'cool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /**
   * Items a mostrar
   */
  @Input() navItems: any[] = [];

  /**
   * Indica en qué sección de scroll nos encontramos
   */
  @Input() currentScrollSection: string = '';

  /**
   * Tema de color seleccionado
   */
  @Output() themeSelected: EventEmitter<any> = new EventEmitter();

  /**
   * Id del item de navegación
   */
  itemId!: number | null;

  /**
   * Temas de color de la página
   */
  themes: ThemeModel[] = THEMES;

  selectedTheme: ThemeModel = this.themes[0];

  constructor(private utilities: UtilitiesService) {}

  ngOnInit() {
    this.setThemeColor();
  }

  /**
   * Setea el tema de color
   * @param theme
   */
  setThemeColor() {
    if (this.selectedTheme.name == this.themes[0].name) {
      this.selectedTheme = this.themes[1];
    } else if (this.selectedTheme.name == this.themes[1].name) {
      this.selectedTheme = this.themes[0];
    }

    this.themeSelected.emit(this.selectedTheme);
    this.utilities.updateSignal(this.selectedTheme as any);

    sessionStorage.setItem('theme-color', JSON.stringify(this.selectedTheme));
  }

  /**
   * Cambia el valor del itemId, al item clickeado actualmente
   * @param id id del item
   */
  storeId(id: number) {
    this.itemId = id;
  }
}

import { Component } from '@angular/core';
import { CV_ROUTE, DESCRIPTION, DESCRIPTION_IMAGE } from 'src/app/data/data';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';

@Component({
  selector: 'cool-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  description = DESCRIPTION;
  image = DESCRIPTION_IMAGE;
  /**
   * Tema de color
   */
  theme: any;

  /**
   * Contiene las clases del botón
   */
  buttonClass: string = '';

  // fb!: FormBuilder

  constructor(private utilities: UtilitiesService) {}

  ngOnInit(): void {
    this.retrieveTheme();
  }

  /**
   * Obtiene el tema de color almacenado
   */
  retrieveTheme() {
    let theme: any;

    //* Obtengo los valores actualizados del tema actual
    this.utilities.signal$.subscribe({
      next: (updatedTheme) => {
        //*Seteo el tema
        theme = updatedTheme;
        this.theme = theme;

        //*Seteo la clase del botón del form
        this.buttonClass =
          this.theme.textContrastColor + ' ' + this.theme.classBorder;
      },
    });
  }

  downloadCV() {
    // window.open(CV_ROUTE, '_blank');
    const link = document.createElement('a');
    link.href = CV_ROUTE;
    link.download = 'CV GABRIEL CARREÑO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

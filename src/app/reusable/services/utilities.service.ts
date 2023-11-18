import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  /**
   * Indica si hay click activo
   */
  signal$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  /**
   * Contiene el objeto con el tema actual
   */
  theme$: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }

  /**
   * Recibe la señal de actualizar el tema
   * @param signal
   */
  updateSignal(signal: boolean){
    this.signal$.next(signal)
  }

  /**
   * Envía señal de que cambió el tema de color
   * @param theme
   * @returns
   */
  updateTheme(theme: any){
    this.theme$.next(theme)
    return this.theme$.asObservable()
  }

  /**
   * Obtiene la sección en la que estamos parados de acuerdo a la posición de scroll
   * @param sections
   * @param currentScrollY
   * @returns
   */
  getActiveSectionByScroll(sections: string[], currentScrollY: number) {

    /**
     * Indica la sección en la que estamos parados
     */
    let currentScrollSection  = ''

    sections.forEach(section => {

      /**
      * Posición de scroll de la sección
      */
      let height: any = document.getElementById(section)?.offsetHeight

      /**
      * La distancia de la sección en el elemento que se encuentra arriba
      */
      let offset: any = document.getElementById(section)?.offsetTop

      //* Si la actual posición de scroll es mayor o igual que el offset y menor que la altura del elemento más el offset
      if(offset <= currentScrollY && currentScrollY < offset + height) {
        currentScrollSection = section
      }

    })

    return currentScrollSection
  }
}

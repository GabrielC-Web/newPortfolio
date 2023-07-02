import { Component } from '@angular/core';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';
import { GITHUB1_DARK, GITHUB1_LIGHT, GITHUB2_DARK, GITHUB2_LIGHT, GMAIL1_DARK, GMAIL1_LIGHT, GMAIL2_DARK, GMAIL2_LIGHT } from 'src/environments/constants';

@Component({
  selector: 'cool-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  socialNetworks: any[] = [
    {
      title: 'Gmail',
      img1Dark: GMAIL1_DARK,
      img2Dark: GMAIL2_DARK,
      img1Light: GMAIL1_LIGHT,
      img2Light: GMAIL2_LIGHT,
      position: 1,
      id: 0,
      zelda: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
      title: 'Github',
      img1Dark: GITHUB1_DARK,
      img2Dark: GITHUB2_DARK,
      img1Light: GITHUB1_LIGHT,
      img2Light: GITHUB2_LIGHT,
      position: 1,
      id: 1,
      zelda: 'https://developer.mozilla.org/es/docs/Web/HTML'
    }
  ]

  /**
   * Indica si hay mouseover
   */
  over: boolean = false

  networkId: number | null = null

  /**
   * Tema de color
   */
  theme: any

  constructor(
    private utilities: UtilitiesService
  ){

  }

  ngOnInit(){
    this.retrieveTheme()
  }

  /**
   * Cambia la imagen de la red social
   * @param id
   */
  storeId(id: number){
    this.networkId = id
  }

   /**
   * Obtiene el tema de color almacenado
   */
   retrieveTheme(){
    let theme: any

    this.utilities.signal$.subscribe({
      next: updatedTheme => {
        theme = updatedTheme
        this.theme = theme
      }
    })
  }

}

import { Component } from '@angular/core';
import { GITHUB1, GITHUB2, GMAIL1, GMAIL2 } from 'src/environments/constants';

@Component({
  selector: 'cool-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  socialNetworks: any[] = [
    {
      title: 'Gmail',
      img1: GMAIL1,
      img2: GMAIL2,
      position: 1,
      id: 0,
      zelda: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
      title: 'Github',
      img1: GITHUB1,
      img2: GITHUB2,
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
   * Cambia la imagen de la red social
   * @param id
   */
  storeId(id: number){
    this.networkId = id
  }

}

import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'cool-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {


  /**
   * Indica si se ha clickeado el formfield
   */
  @Input() clicked: boolean = false

  constructor(
    private utilities: UtilitiesService
  ){

  }

  ngOnInit(){
    this.utilities.signal$.subscribe({
      next: clicked => {
        if(clicked){
          this.clicked = true
        } else{
          this.clicked = false
        }
      }
    })
  }

}

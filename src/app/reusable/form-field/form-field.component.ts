import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'cool-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @Input() clicked: boolean = false

  constructor(
    private utilities: UtilitiesService
  ){

  }

  clickedField(){
    // this.utilities.updateSignal(true)
    this.clicked = true
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cool-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  /**
   * Formulario de contacto
   */
  contactForm!: FormGroup;

  // fb!: FormBuilder

  constructor(
    private fb: FormBuilder,
  ){

  }

  ngOnInit(){
    this.setForm()
  }

  setForm(){
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      subject: [''],
    })
  }

  onSubmit(){
    // console.log(this.contactForm.value);

  }

}

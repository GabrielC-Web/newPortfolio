import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';

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

  /**
   * Tema de color
   */
  theme: any

  /**
   * Contiene las clases del botón
   */
  buttonClass: string = ''

  // fb!: FormBuilder

  constructor(
    private fb: FormBuilder,
    private utilities: UtilitiesService,
  ){

  }

  ngOnInit(){
    this.retrieveTheme()
    this.setForm()
  }

  setForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      subject: [''],
    })
  }

  onSubmit(){
    // console.log(this.contactForm.value);
  }

  /**
   * Obtiene el tema de color almacenado
   */
  retrieveTheme(){
    let theme: any

    //* Obtengo los valores actualizados del tema actual
    this.utilities.signal$.subscribe({
      next: updatedTheme => {

        //*Seteo el tema
        theme = updatedTheme
        this.theme = theme

        console.log(theme);


        //*Seteo la clase del botón del form
        this.buttonClass = this.theme.textContrastColor + ' ' +  this.theme.classBorder

      }
    })
  }

}

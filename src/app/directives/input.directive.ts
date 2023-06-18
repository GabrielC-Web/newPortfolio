import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[coolInput]'
})
export class InputDirective {

  /**
   * Clase inicial del input
   */
  initialClass: string = 'cool-input p-2 border-solid duration-500 border-b border-white placeholder:!text-transparent'

  /**
   * Indica si fue clickeado el elemento
   */
  clicked: boolean = false
  clicked$: BehaviorSubject<boolean> = new BehaviorSubject(this.clicked)

  @HostListener('click')
  onClick(){
    this.clicked = true
    this.clicked$.next(this.clicked)
  }

  @HostListener('blur')
  onBlur(){
    this.clicked = false
    this.clicked$.next(this.clicked)
  }

  @HostBinding('class') dynamicClass: string  = this.initialClass

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit(){
    this.handleClick()
  }

  /**
   * Cambia las clases del input al ser clickeado
   */
  handleClick(){
    this.clicked$.subscribe({
      next: clicked => {
        if(clicked){
          this.dynamicClass = 'cool-input p-2 placeholder:text-white transition duration-500 border-solid border-b border-angel-green'
        } else{
          this.dynamicClass = this.initialClass
        }
      }
    })
  }
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ANGULAR, BOOTSTRAP, CSSIMG, GIT, HTML5, JAVASCRIPT, REACT, TAILWIND, TYPESCRIPT } from 'src/environments/constants';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'cool-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input() skills: any[] = [
    {
      title: 'Html',
      img: HTML5,
      position: 1,
      description: 'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).',
      zelda: 'https://developer.mozilla.org/es/docs/Web/HTML'
  },
  {
      title: 'Css',
      img: CSSIMG,
      position: 2,
      description: 'CSS viene de las iniciales de "Cascading Style Sheets", que traducimos por "Hojas de estilo en cascada". Es el segundo lenguaje más esencial para crear páginas web. Con el que se define la parte de la presentación, es decir, cómo deben mostrarse los elementos de la página, su posición, forma, espaciados, colores y en resumen, toda la parte estética.',
      zelda: 'https://developer.mozilla.org/es/docs/Web/CSS'
  },
  {
      title: 'Bootstrap',
      img: BOOTSTRAP,
      position: 0,
      description: 'Bootstrap es un conjunto de herramientas de código abierto muy popular entre los expertos en desarrollo web, ya que está ideado para un desarrollo responsive. Es decir, gracias a Bootstrap, los desarrolladores web pueden crear páginas web visibles en diferentes formatos y pantallas.',
      zelda: 'https://getbootstrap.com/'
  },
  {
      title: 'Tailwind',
      img: TAILWIND,
      position: 3,
      description: 'Tailwind es un framework CSS que nos proporciona clases de utilidad de un solo propósito que son opinables en su mayor parte, y que nos ayudan a diseñar nuestras páginas web desde dentro de nuestro marcado o archivos.',
      zelda: 'https://tailwindcss.com/'
  },
  {
      title: 'Javascript',
      img: JAVASCRIPT,
      position: -1,
      description: 'JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.',
      zelda: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
      title: 'Typescript',
      img: TYPESCRIPT,
      position: 4,
      description: 'TypeScript es un lenguaje orientado a objetos (como el lenguaje R, por ejemplo). Esto quiere decir que tanto el cliente como el servidor tienen acceso a la escritura de código. Además, se trata de un código abierto. Por otro lado, destaca por ser multiplataforma y, por consiguiente, ser portátil.',
      zelda: 'https://www.typescriptlang.org/'
  },
  {
      title: 'React',
      img: REACT,
      position: -2,
      description: 'React es una biblioteca o librería de código abierto que está escrita en JavaScript. Fue desarrollada por Facebook en el 2013 con la finalidad de facilitar la creación de componentes reutilizables e interactivos para las interfaces de usuario.',
      zelda: 'https://es.react.dev/'
  },
  {
      title: 'Angular',
      img: ANGULAR,
      position: 5,
      description: 'Angular es un framework de ingeniería de software de código abierto mantenido por Google, que sirve para desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA). Sirve tanto para versiones móviles como de escritorio.',
      zelda: 'https://angular.io/'
  },
  {
      title: 'Git',
      img: GIT,
      position: -3,
      description: 'Git es un sistema de control de versiones distribuido, lo que significa que un clon local del proyecto es un repositorio de control de versiones completo. Estos repositorios locales plenamente funcionales permiten trabajar sin conexión o de forma remota con facilidad.',
      zelda: 'https://git-scm.com/'
  },
  ]


  constructor(
    private dialog: MatDialog
  ){

  }

  /**
   * Abre diálogo con explicación de la habilidad seleccionada
   * @param project
   */
  openDetail(skill: any): void{
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: skill,
      // height: '400px',
      width: '700px',
      maxWidth: '90vw',
      restoreFocus: false
    })
  }

}

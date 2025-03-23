import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/models/general.model';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';
import { PROJECT_MINIATURES } from 'src/environments/constants';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'cool-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  /**
   * Tema de color
   */
  theme: any;

  @Input() projects: ProjectModel[] = [
    {
      title: 'Next.js Gallery',
      id: 4,
      description:
        'Una galería con infinidad de imágenes, alimentada por las APIs de Pexels',
      imgDark: PROJECT_MINIATURES.NEXTJS_GALLERY,
      imgLight: PROJECT_MINIATURES.NEXTJS_GALLERY,
      zelda: 'https://next-image-gallery-zdu8.vercel.app',
    },

    {
      title: 'Tienda de ropa online',
      id: 2,
      description: 'Plantilla para sitio web ecommerce de venta de ropa.',
      imgDark: PROJECT_MINIATURES.ECOMMERCE,
      imgLight: PROJECT_MINIATURES.ECOMMERCE,
      zelda: 'https://gabrielc-web.github.io/clothes-store-template',
    },
    {
      title: 'Tienda de maquillaje online',
      id: 3,
      description: 'Plantilla para sitio web ecommerce de venta de maquillaje.',
      imgDark: PROJECT_MINIATURES.MAKEUP,
      imgLight: PROJECT_MINIATURES.MAKEUP,
      zelda: 'https://gabrielc-web.github.io/makeup-store-template',
    },
    {
      title: 'Tienda de libros online',
      id: 3,
      description: 'Plantilla para sitio web ecommerce de venta de libros.',
      imgDark: PROJECT_MINIATURES.BOOKS,
      imgLight: PROJECT_MINIATURES.BOOKS,
      zelda: 'https://gabrielc-web.github.io/books-store-template',
    },
    {
      title: 'Calculadora en flutter',
      id: 3,
      description: 'Calculadora para Android hecha con flutter',
      imgDark: PROJECT_MINIATURES.CALCULATOR,
      imgLight: PROJECT_MINIATURES.CALCULATOR,
      zelda: 'https://www.upload-apk.com/en/nPMerpWitFebzZw',
    },
    {
      title: 'Super Tic Tac Toe!',
      id: 3,
      description:
        'Un juego de Tic Tac Toe, pero con una pequeña complejidad añadida',
      imgDark: PROJECT_MINIATURES.TIC_TAC_TOE,
      imgLight: PROJECT_MINIATURES.TIC_TAC_TOE,
      zelda: 'https://gabrielc-web.github.io/super-tic-tac-toe/',
    },
    {
      title: 'Pugberto dancing music analyser',
      id: 1,
      description:
        'Este programa te permite reproducir música para obtener un feedback del ritmo de manera divertida y original.',
      imgDark: PROJECT_MINIATURES.PUGBERTO,
      imgLight: PROJECT_MINIATURES.PUGBERTO,
      zelda: 'https://gabrielc-web.github.io/pugberto_music_analyzer/',
      imageClass: '!w-full  max-w-[100px] !h-28',
    },
    // {
    //   title: 'Next.js Dashboard',
    //   id: 3,
    //   description:
    //     'Una web de ejemplo con un dashboard sencillo y funcional hecho con Nextjs',
    //   imgDark: PROJECT_MINIATURES.NEXTJS_DASHBOARD,
    //   imgLight: PROJECT_MINIATURES.NEXTJS_DASHBOARD,
    //   zelda: 'https://nextjs-dashboard-zeta-three-94.vercel.app/',
    // },

    // {
    //   title: 'Aerodinámica de una vaca',
    //   id: 2,
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
    //   imgDark: PROJECT2_DARK,
    //   imgLight: PROJECT2_LIGHT,
    //   zelda: ''
    // },
    // {
    //   title: 'Cabras razonables',
    //   id: 3,
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
    //   imgDark: PROJECT3_DARK,
    //   imgLight: PROJECT3_LIGHT,
    //   zelda: ''
    // },
  ];

  constructor(private dialog: MatDialog, private utilities: UtilitiesService) {}

  ngOnInit() {
    this.retrieveTheme();
  }

  openDetail(project: any): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: project,
      // height: '500px',
      width: '700px',
      maxWidth: '90vw',
      height: 'fit-content',
      maxHeight: '600px',
      minHeight: '350px',
      restoreFocus: false,
      autoFocus: false,
    });
  }

  /**
   * Obtiene el tema de color almacenado
   */
  retrieveTheme() {
    let theme: any;

    this.utilities.signal$.subscribe({
      next: (updatedTheme) => {
        theme = updatedTheme;
        this.theme = theme;
      },
    });
  }
}

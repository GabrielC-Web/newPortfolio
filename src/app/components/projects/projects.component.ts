import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/models/general.model';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';
import { PROJECT1_DARK, PROJECT1_LIGHT } from 'src/environments/constants';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'cool-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  /**
   * Tema de color
   */
  theme: any

  @Input() projects: ProjectModel[] = [
    {
      title: 'Pugberto dancing music analyser',
      id: 1,
      description: 'Este programa te permite reproducir música para obtener un feedback del ritmo de manera divertida y original.',
      imgDark: PROJECT1_DARK,
      imgLight: PROJECT1_LIGHT,
      zelda: 'https://gabrielc-web.github.io/pugberto_music_analyzer/'
    },
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
  ]

  constructor(
    private dialog: MatDialog,
    private utilities: UtilitiesService,
  ){

  }

  ngOnInit(){
    this.retrieveTheme()
  }

  openDetail(project: any): void{
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: project,
      // height: '500px',
      width: '700px',
      maxWidth: '90vw',
      height: 'fit-content',
      maxHeight: '600px',
      restoreFocus: false,
      autoFocus: false
    })
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

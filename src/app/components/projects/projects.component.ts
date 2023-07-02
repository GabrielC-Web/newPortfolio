import { Component, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {PROJECT1_DARK, PROJECT1_LIGHT, PROJECT2_DARK, PROJECT2_LIGHT, PROJECT3_DARK, PROJECT3_LIGHT } from 'src/environments/constants';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';

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

  @Input() projects: any[] = [
    {
      title: 'Proyecto',
      id: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      imgDark: PROJECT1_DARK,
      imgLight: PROJECT1_LIGHT
    },
    {
      title: 'Aerodinámica de una vaca',
      id: 2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      imgDark: PROJECT2_DARK,
      imgLight: PROJECT2_LIGHT
    },
    {
      title: 'Cabras razonables',
      id: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      imgDark: PROJECT3_DARK,
      imgLight: PROJECT3_LIGHT
    },
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
      restoreFocus: false
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

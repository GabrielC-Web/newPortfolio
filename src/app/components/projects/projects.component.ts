import { Component, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PROJECT1 } from 'src/environments/constants';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'cool-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input() projects: any[] = [
    {
      title: 'Proyecto',
      id: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      img: PROJECT1
    },
    {
      title: 'Aerodinámica de una vaca',
      id: 2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      img: PROJECT1
    },
    {
      title: 'Cabras razonables',
      id: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis quis tenetur harum a maiores obcaecati illo in, eius nisi similique. Asperiores expedita illo aspernatur veniam doloremque facere id fugiat?',
      img: PROJECT1
    },
  ]


  constructor(
    private dialog: MatDialog
  ){

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
}

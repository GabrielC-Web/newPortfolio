import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/models/general.model';
import { UtilitiesService } from 'src/app/reusable/services/utilities.service';

@Component({
  selector: 'cool-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  /**
   * Tema de color
   */
  theme: any

  /**
   * Clase con bordes y texto de color
   */
  contrastClass: string = ''

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    private utilities: UtilitiesService,
    @Inject(MAT_DIALOG_DATA) public data: ProjectModel,
  ) {}


  ngOnInit(){
    this.retrieveTheme()
  }


  close(): void {
    this.dialogRef.close();
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

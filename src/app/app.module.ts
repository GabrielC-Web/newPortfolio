import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StartViewComponent } from './components/start-view/start-view.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartViewComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectDialogComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

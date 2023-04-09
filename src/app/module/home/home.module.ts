import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ServicesComponent } from '../services/services.component';
import { IntroComponent } from '../intro/intro.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfTemplateComponent } from 'src/app/pdf/pdf-template/pdf-template.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    ServicesComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    PdfTemplateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

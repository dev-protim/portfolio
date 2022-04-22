import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ServicesComponent } from '../services/services.component';
import { IntroComponent } from '../intro/intro.component';
import { SkillsComponent } from '../skills/skills.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    ServicesComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

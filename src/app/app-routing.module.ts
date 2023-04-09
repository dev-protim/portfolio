import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfTemplateComponent } from './pdf/pdf-template/pdf-template.component';

const routes: Routes = [
  {
    path: 'pdf',
    component: PdfTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

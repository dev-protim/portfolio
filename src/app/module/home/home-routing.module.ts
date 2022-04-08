import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  // {
  //   path: 'products', component: ProductGridComponent
  // },
  // {
  //   path: 'singleProduct', component: SingleProductComponent
  // },
  // {
  //   path: 'contactUs', component: ContactUsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

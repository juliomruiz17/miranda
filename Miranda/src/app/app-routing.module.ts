import { TotersComponent } from './components/toters/toters.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  { path: "", component: SkeletonComponent},
  
    { path: "Product", component: ProductComponent},
  

  { path: "home", component: HomeComponent},
  { path: "Toters", component: TotersComponent },



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes =[
  {
    path : 'about',
    component : AboutUsComponent,
  },
  {
  path : 'home',
  component :HomeComponent,
},
{
  path:'404',
  component:PageNotFoundComponent,
},
{
  path: '**', 
  redirectTo: '/404',
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class MyappRoutingModule { }

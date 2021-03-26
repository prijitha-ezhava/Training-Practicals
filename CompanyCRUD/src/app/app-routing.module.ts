import { HomeComponent } from './company/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './company/create/create.component';
import { UpdateComponent } from './company/update/update.component';
import { DetailsComponent } from './company/details/details.component';


const routes: Routes = [
  {path:'', redirectTo:'company/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'update',component:UpdateComponent},
  {path:'details',component:DetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './company/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './company/create/create.component';
import { DetailsComponent } from './company/details/details.component';
import { UpdateComponent } from './company/update/update.component';
import { DeleteComponent } from './company/delete/delete.component';

const routes: Routes = [
  {path:'', redirectTo:'company/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'details',component:DetailsComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

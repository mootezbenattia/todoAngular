import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AddtolistComponent } from './addtolist/addtolist.component';
import { UpdateComponent } from './update/update.component';
import { ListetodoComponent } from './listetodo/listetodo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'Inscription',
    component:InscriptionComponent
  },
  {
    path:'addtolist',
    component:AddtolistComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'listetodo',
    component:ListetodoComponent,
  },
  {
    path:'test',
    component:TestComponent,
  },
  {
    path:'**',
    component:NotFoundComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

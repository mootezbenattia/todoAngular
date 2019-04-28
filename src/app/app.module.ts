import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListetodoComponent } from './listetodo/listetodo.component';
import { AddtolistComponent } from './addtolist/addtolist.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    InscriptionComponent,
    ConnexionComponent,
    ListetodoComponent,
    AddtolistComponent,
    UpdateComponent,
    NotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    ToastrModule.forRoot(),
   
    ModalModule.forRoot(),
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

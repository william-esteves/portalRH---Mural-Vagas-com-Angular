import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    PainelVagasComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

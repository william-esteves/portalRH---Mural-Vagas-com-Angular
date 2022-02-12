import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';

const rotas: Routes = [
    {path: 'mural', component: MuralVagasComponent},
    {path: 'painel', component: PainelVagasComponent},
    {path: '', redirectTo: '/mural', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

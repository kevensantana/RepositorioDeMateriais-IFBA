// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// serviços
import { PostarService } from './postar/postar.service';


import { ReactiveFormsModule } from '@angular/forms';

// Rotas
import { HomeService } from './home/home.service';
import { HomeComponent } from './home/home.component';
import { AssuntosDisciplinaComponent } from './assuntos-disciplina/assuntos-disciplina.component';
import { AppComponent } from './app.component';
import { AssuntosPostadosComponent } from './assuntos-postados/assuntos-postados.component';
import { PostarComponent } from './postar/postar.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DepartamentoComponent } from './departamento/departamento.component';

// FireBase





@NgModule({

  declarations: [
    AppComponent,
    AssuntosDisciplinaComponent,
    AssuntosPostadosComponent,
    PostarComponent,
    DuvidasComponent,
    PerfilComponent,
    DepartamentoComponent,
  ],

    imports: [
    BrowserModule,
    ReactiveFormsModule,
    
    // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'departamento', component: DepartamentoComponent},
      {path: 'postar', component: PostarComponent},
      {path: 'duvidas', component: DuvidasComponent},
      {path: 'home/disciplina', component: AssuntosDisciplinaComponent},
      {path: 'home/disciplina/postados', component: AssuntosPostadosComponent},
      {path: 'perfil', component: PerfilComponent},
    ]),

  ],
  providers: [
    HomeService,
    PostarService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

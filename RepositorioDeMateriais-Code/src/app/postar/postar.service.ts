import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostarService {

  getDepartamentos() {
    return [ 'Humanas', 'Exatas', 'Linguágens', 'Técnicas'];
  }

  getDisciplinas() {
    return [ 'Sociologia', 'Filosofia', 'História', 'Geografia'];
  }

  getAssuntos() {
    return [ 'Capitalismo', 'Comunismo', 'Segunda Guerra Mundial', 'Industrialização', 'Consumismo'];
  }



  constructor() { }
}



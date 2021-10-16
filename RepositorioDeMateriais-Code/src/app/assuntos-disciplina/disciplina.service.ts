import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  getAssuntos() {
    return [ 'Capitalismo', 'Comunismo', 'Segunda Guerra Mundial', 'Industrialização', 'Consumismo'];
  }
  
  constructor() { }
}
   
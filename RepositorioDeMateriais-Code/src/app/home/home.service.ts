import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  emitirDisciplina = new EventEmitter<string>();


  private disciplina: string[] = ['Angular 2', 'Java', 'Phonegap'];


getDisciplina() {
    return this.disciplina;
}

}

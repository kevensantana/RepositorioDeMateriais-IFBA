import { DisciplinaService } from './disciplina.service';
// import { HomeService } from './../app/home.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assuntos-disciplina',
  templateUrl: './assuntos-disciplina.component.html',
  styleUrls: ['./assuntos-disciplina.component.css']
})
export class AssuntosDisciplinaComponent implements OnInit {

  assuntos: string[] = [];
  

  disciplinaService: DisciplinaService

  constructor(_disciplinaService: DisciplinaService) { 
    // this.postarService = new PostarService();

    this.disciplinaService = _disciplinaService;
  }

  ngOnInit() {
    this.assuntos = this.disciplinaService.getAssuntos()
  }

}

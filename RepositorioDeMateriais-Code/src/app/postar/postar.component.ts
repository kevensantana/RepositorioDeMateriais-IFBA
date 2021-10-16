import { Postar } from './shared/postar';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostarService } from './postar.service';


@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {

  formPostar: FormGroup;


  departamentos: string[] = [];
  disciplinas: string[] = [];
  assuntos: string[] = [];
  
  postarService: PostarService

  constructor(_postarService: PostarService) { 
    // this.postarService = new PostarService();

    this.postarService = _postarService;
  }

  ngOnInit(): void {
    this.departamentos = this.postarService.getDepartamentos();
    this.disciplinas = this.postarService.getDisciplinas();
    this.assuntos = this.postarService.getAssuntos()

    this.createForm(new Postar());
  }

  createForm(postar: Postar) {
    this.formPostar = new FormGroup({
      titulo: new FormControl(postar.titulo),
      descricao: new FormControl(postar.descricao),
      departamento: new FormControl(postar.departamento),
      disciplina: new FormControl(postar.disciplina),
      assunto: new FormControl(postar.assunto),
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    // console.log(this.formPostar.value);

    let dados =  this.formPostar.value

    console.log(dados);


    // Usar o método reset para limpar os controles na tela
    // this.formPostar.reset(new Postar());
  }

}

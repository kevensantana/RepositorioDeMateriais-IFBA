import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  disciplina: string[] =['Angular 2', 'Java', 'Phonegap']

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.disciplina = this.homeService.getDisciplina();
  }

}

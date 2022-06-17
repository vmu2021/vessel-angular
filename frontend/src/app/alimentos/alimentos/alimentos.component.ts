import { Component, OnInit } from '@angular/core';
import { Alimento } from '../models/alimento';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {
  alimentos: Alimento[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

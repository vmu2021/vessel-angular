import { Component, Input, OnInit } from '@angular/core';
import { Alimento } from '../models/alimento';

@Component({
  selector: 'app-alimento-item',
  templateUrl: './alimento-item.component.html',
  styleUrls: ['./alimento-item.component.css']
})
export class AlimentoItemComponent implements OnInit {
  // @Input() alimento: Alimento;

  constructor() { }

  ngOnInit(): void {
  }

}

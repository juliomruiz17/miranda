import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LojaM: string = "assets/imag/LojaM.png";

  constructor() { }

  ngOnInit(): void {
  }

}

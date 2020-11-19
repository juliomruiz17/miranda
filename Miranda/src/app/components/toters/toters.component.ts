import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toters',
  templateUrl: './toters.component.html',
  styleUrls: ['./toters.component.scss']
})
export class TotersComponent implements OnInit {
  AndreaM: string = "assets/imag/msc1.jpg";
  JulioM: string = "assets/imag/julio.jpeg";
  EdwimR:  string = "assets/imag/graduacion.jpg";
  Vzla: string = "assets/imag/vzla.jpg"
  gridColumns = 3;


  constructor() { }
  

  ngOnInit(): void {
  }

}

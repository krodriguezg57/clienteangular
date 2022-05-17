import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  //Atributos
  titulo:String="Karen"

  constructor() { }

  ngOnInit(): void {
  }

}

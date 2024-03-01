import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {
  numeroGanador: number | undefined;
  girando: boolean = false;
  rotacion: number = 0;
  mostrarNumeroGanador: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  girarRuleta() {
    this.mostrarNumeroGanador = false;
      this.girando = true;
      const rotacionFinal = Math.floor(Math.random() * 360);
      const vueltas = Math.floor(Math.random() * 5) + 5; 
      const rotacionTotal = 360 * vueltas + rotacionFinal;
      this.rotacion = rotacionTotal;
      setTimeout(() => {
        this.numeroGanador = Math.floor(rotacionFinal / (360 / 37));
        this.rotacion = 0;
        this.girando = false;
        this.mostrarNumeroGanador = true;
    }, 600); 
  }
}

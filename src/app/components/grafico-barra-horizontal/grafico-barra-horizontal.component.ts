import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  results: any[] = [
    {
      name: 'Juego 1',
      value: 20,
    },
    {
      name: 'Juego 2',
      value: 25,
    },
    {
      name: 'Juego 3',
      value: 18,
    },
    {
      name: 'Juego 4',
      value: 19,
    },
    {
      name: 'Juego 5',
      value: 27,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  intervalo;

  constructor() {
    this.intervalo = setInterval(() => {
      const newResults = [...this.results];
      // tslint:disable-next-line: forin
      for (let i in newResults) {
          newResults[i].value = Math.floor(Math.random() * 500);
        }
      this.results = [...newResults];
      }, 3000);

  }
  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    clearInterval(this.intervalo)
  }
}

import { Component, OnInit } from '@angular/core';
import { CardItemContent } from '../../models/card-item-content';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Pepito', 'Juanita', 'Lupita', 'Kevin', 'Braian', 'Pandemio', 'Juan'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 78, 80, 81, 100, 100, 95], label: 'Español' },
    { data: [66, 80, 40, 100, 86, 27, 90], label: 'Matemáticas' }
  ];
  constructor() { }
  ngOnInit(): void { }
}

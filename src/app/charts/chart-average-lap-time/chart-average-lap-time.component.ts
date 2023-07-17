import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'to-chart-average-lap-time',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './chart-average-lap-time.component.html',
  styleUrls: ['./chart-average-lap-time.component.scss']
})
export class ChartAverageLapTimeComponent {
  legendPosition = LegendPosition.Below;
  colorScheme: any = {
    domain: ['rgb(99, 102, 241)', 'rgb(217, 70, 239)']
  };
  data = [
    {
      "name": "Todos",
      "series": [
        {
          "name": "Hombre",
          "value": 8.40,
        },
        {
          "name": "Mujer",
          "value": 8.55,
        }
      ]
    },
    {
      "name": "FWD",
      "series": [
        {
          "name": "Hombre",
          "value": 8.25,
        },
        {
          "name": "Mujer",
          "value": 8.40,
        }
      ]
    },
    {
      "name": "RWD",
      "series": [
        {
          "name": "Hombre",
          "value": 7.58,
        },
        {
          "name": "Mujer",
          "value": 8.10,
        }
      ]
    },
    {
      "name": "AWD",
      "series": [
        {
          "name": "Hombre",
          "value": 8.05,
        },
        {
          "name": "Mujer",
          "value": 8.20,
        }
      ]
    }
  ]
}
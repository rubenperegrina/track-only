import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ChartAverageLapTimeComponent } from 'src/app/charts/chart-average-lap-time/chart-average-lap-time.component';
import { AverageLapTimeComponent } from '../average-lap-time/average-lap-time.component';

@Component({
  selector: 'to-general-results',
  standalone: true,
  imports: [CommonModule, MatIconModule, ChartAverageLapTimeComponent, AverageLapTimeComponent],
  templateUrl: './general-results.component.html',
  styleUrls: ['./general-results.component.scss']
})
export class GeneralResultsComponent {

}

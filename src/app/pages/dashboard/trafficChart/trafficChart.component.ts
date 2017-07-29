import { Component, AfterViewInit } from '@angular/core';

import { TrafficChartService } from './trafficChart.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss'],
})

// TODO: move chart.js to it's own component
export class TrafficChart implements AfterViewInit {

  public doughnutData: Array<Object>;

  constructor(private trafficChartService: TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    const el = jQuery('.chart-area').get(0) as HTMLCanvasElement;

    const ctx = el.getContext('2d');

    const g = new Chart(ctx, {
        type: 'doughnut',
         data: this.doughnutData[0],
        options: {
          legend: {
              display: false,
          },
          cutoutPercentage: 64,
          responsive: true,
        },
    });
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";
import { DashboardService } from 'src/app/services/dashboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions: any;
  @Input() data:any = [];
  @Input() seriesName:string="";
  @Input() xAxisNames:any = []



  constructor(private dashboardSvc:DashboardService) {
   }


  ngOnInit(): void {
    //this.prepareStateWiseData();
    this.drawGroupedBarChart();
    
  }

  drawGroupedBarChart(){
    this.chartOptions = {
      series: [
        {
          name: this.seriesName,
          data: this.data
        },
      ],
      chart: {
        type: "bar",
        height: 630
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.xAxisNames
      }
    };
  }
  
}

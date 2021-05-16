import { Component, Input, OnInit } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexXAxis,
    ApexTooltip
  } from "ng-apexcharts";

  
@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  
  @Input() data:any = [];
  @Input() chartTitle:string = "";
  @Input() labelXAxis:string = "";

    constructor() {
    }
    
    public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;

    ngOnInit() {
      this.initChartData();
    }
    

    public initChartData(): void {
        /*let ts2 = 1484418600000;
        let dates:any = [];
        for (let i = 0; i < 120; i++) {
          ts2 = ts2 + 86400000;
          dates.push([ts2, dataSeries[1][i].value]);
        }*/
        
        this.series = [
          {
            name: this.chartTitle,
            data:  this.data
          }
        ];
        this.chart = {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: "zoom"
          }
        };
        this.dataLabels = {
          enabled: false
        };
        this.markers = {
          size: 0
        };
        this.title = {
          text: this.chartTitle,
          align: "left"
        };
        this.fill = {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        };
        this.yaxis = {
          labels: {
            formatter: function(val) {
              return val.toFixed();
            }
          },
          title: {
            text: this.labelXAxis
          }
        };
        this.xaxis = {
          type: "datetime"
        };
        this.tooltip = {
          shared: false,
          y: {
            formatter: function(val) {
              return val.toFixed();
            }
          }
        };
      } 

}
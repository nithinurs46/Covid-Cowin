import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private dashboardSvc:DashboardService) { 
   
  }
  statsHistory:any;
  titleDaily:string="Cases (Cumulative)";
  labelDaily:string = "Cases"

  titleDeath:string = "Deaths (Cumulative)"
  labelDeath:string = "Deaths"
  
  positiveCaseData:any = [];
  deathData:any = [];

  stateWiseCases:any = [];
  stateWiseDeath:any = [];
  stateNames:any  = [];

  seriesNameCases:string = "Positive Cases";
  seriesNameDeaths:string = "Deaths";

  async ngOnInit(): Promise<void> {
    <any>await this.retreiveStatsHistory();
    <any>await this.prepareStateWiseData();
  }

  async retreiveStatsHistory() {
    this.dashboardSvc.getStatsHistory()
      .subscribe(response => {
        this.statsHistory = response.data;
        this.prepareDailyCaseCountArr();
        this.prepareDailyDeathArr();
        //this.positiveCaseData = this.dashboardSvc.prepareDailyCaseCountArr(this.statsHistory);
        //this.deathData = this.dashboardSvc.prepareDailyDeathArr(this.statsHistory);

      });
    }

    prepareDailyCaseCountArr(){
      /*let datesss:any = [];
      let dateInMillis;
      let totalCount;
      for(let i=0; i<this.statsHistory.length; i++){
        dateInMillis = new Date(this.statsHistory[i].day).getTime();
        totalCount = this.statsHistory[i].summary.confirmedCasesIndian + this.statsHistory[i].summary.confirmedCasesIndian;
        datesss.push([dateInMillis, totalCount]);
        this.dailyCountJson.push({
          date: new Date(this.statsHistory[i].day).getTime(),
          value: this.statsHistory[i].summary.confirmedCasesIndian + this.statsHistory[i].summary.confirmedCasesIndian
        });
    }
    console.log("dailyCountJson: "+datesss);
    this.dashboardSvc.setDailyCountData(datesss);*/

    let ts2;
    let value;
    for (let i = 0; i < this.statsHistory.length; i++) {
      ts2 = new Date(this.statsHistory[i].day).getTime();
      value =  this.statsHistory[i].summary.total;
      this.positiveCaseData.push([ts2, value]);
    }
    //this.dashboardSvc.setDailyCountData(dates);
    }

    prepareDailyDeathArr(){
    let dateInMillis;
    let value;
    for (let i = 0; i < this.statsHistory.length; i++) {
      dateInMillis = new Date(this.statsHistory[i].day).getTime();
      value =  this.statsHistory[i].summary.deaths;
      this.deathData.push([dateInMillis, value]);
    }
    }

    async prepareStateWiseData(){
      this.dashboardSvc.getAllStats().subscribe((response:any) => {
        let regional = response.data.regional;
        for(let i = 0;i<response.data.regional.length;i++){
          this.stateWiseCases.push(regional[i].totalConfirmed);
          this.stateWiseDeath.push(regional[i].deaths);
          this.stateNames.push(regional[i].loc);
        }
      });
    }

}

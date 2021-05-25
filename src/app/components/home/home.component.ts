import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //stateWiseData:any;
  //summaryData:any;
  lastOriginUpdated: any;
  statsHistory: any;
  titleDaily: string = "Daily Cases";
  labelDaily: string = "Cases"

  titleDeath: string = "Daily Deaths"
  labelDeath: string = "Deaths"

  positiveCaseData: any = [];
  deathData: any = [];
  constructor(private dashboardSvc: DashboardService) {
  }

  ngOnInit(): void {
    this.retreiveAllStats();
    this.retreiveStatsHistory();

  }

  retreiveAllStats() {
    this.dashboardSvc.getAllStats()
      .subscribe(response => {
        this.fetchLatestData(response);
        this.lastOriginUpdated = response.lastOriginUpdate;
        //this.fetchAllStatsData(response);
        //this.fetchSummaryData(response);
      });

  }

  /*private fetchAllStatsData(response: any) {
    this.stateWiseData = response.data.regional;
    this.dashboardSvc.sendAllStats(this.stateWiseData);
  }

  private fetchSummaryData(response: any) {
    this.summaryData = response.data.summary;
    this.dashboardSvc.sendSummary(this.summaryData);
  }*/
  private fetchLatestData(response: any) {
    this.dashboardSvc.sendLatestData(response);
  }

  retreiveStatsHistory() {
    this.dashboardSvc.getStatsHistory()
      .subscribe(response => {
        this.statsHistory = response.data;
        this.prepareDailyCaseCountArr();
        this.prepareDailyDeathArr();

      });
  }

  prepareDailyCaseCountArr() {
    let ts2;
    let value;
    for (let i = 0; i < this.statsHistory.length; i++) {
      ts2 = new Date(this.statsHistory[i].day).getTime();
      if (i > 0) {
        value = this.statsHistory[i].summary.total - this.statsHistory[i - 1].summary.total;
      } else {
        value = this.statsHistory[i].summary.total;
      }
      this.positiveCaseData.push([ts2, value]);
    }
    //this.dashboardSvc.setDailyCountData(dates);
  }

  prepareDailyDeathArr() {
    let dateInMillis;
    let value;
    for (let i = 0; i < this.statsHistory.length; i++) {
      dateInMillis = new Date(this.statsHistory[i].day).getTime();
      if (i > 0) {
        value = this.statsHistory[i].summary.deaths - this.statsHistory[i - 1].summary.deaths;;
      } else {
        value = this.statsHistory[i].summary.deaths;
      }
      this.deathData.push([dateInMillis, value]);
    }
  }
}

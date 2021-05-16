import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  subscription: Subscription;
    summaryStats: any;
  constructor(private dashboardSvc: DashboardService) {
    this.subscription = dashboardSvc.latestDataSubject$.subscribe((response:any) => {
      this.summaryStats = response.data.summary;
    });
    this.retreiveTestingStats();
  }
  lastRefereshedAt:any;
  lastOriginUpdatedAt:any;
  testingStats:any;
  totalTested:number =0;
  dateLastTested:any;
  singleDayTestingCount:number =0;
  testStartDate:any;



  ngOnInit(): void {
    // this.getSummaryData();
  }

  /*getSummaryData() {

    this.dashboardSvc.getAllStats()
      .subscribe(response => {
        this.mapDisplayResponse(response);
      });

  }

  private mapDisplayResponse(response: any) {
    this.summaryStats = response.data.summary;
  }*/

  retreiveTestingStats() {
    this.dashboardSvc.getTestingStats()
      .subscribe(response => {
        this.lastRefereshedAt = response.lastRefreshed;
        this.lastOriginUpdatedAt = response.lastOriginUpdate;
        this.testingStats = response.data;
        this.testStartDate = this.testingStats[0].day;
        let totalRecord = this.testingStats.length;
        let lastTwoRecords = this.testingStats.splice(totalRecord-2, totalRecord);
        this.dateLastTested = lastTwoRecords[0].day;
        this.totalTested = lastTwoRecords[1].totalSamplesTested;
        this.singleDayTestingCount = lastTwoRecords.reduce(function(currentRec: any, val: { totalSamplesTested: any; }) {
          return val.totalSamplesTested - currentRec;
      }, 0);
      });
    }
}

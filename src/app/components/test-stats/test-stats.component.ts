import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-test-stats',
  templateUrl: './test-stats.component.html',
  styleUrls: ['./test-stats.component.css']
})
export class TestStatsComponent implements OnInit {

  lastRefereshedAt:any;
  lastOriginUpdatedAt:any;
  testingStats:any;
  totalTested:number =0;
  dateLastTested:any;
  singleDayTestingCount:number =0;
  testStartDate:any;
  
  constructor(private dashboardSvc:DashboardService) { }

  ngOnInit(): void {
    this.retreiveTestingStats();
    
  }
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

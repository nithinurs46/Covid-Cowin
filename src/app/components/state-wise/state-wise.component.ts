import {Component, AfterViewInit,  ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})


export class StateWiseComponent implements AfterViewInit  {

  displayedColumns: string[] = ['loc', 'totalConfirmed', 'discharged', 'deaths'];
  dataSource:any;
  subscription: Subscription;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private dashboardSvc:DashboardService){
    //this.getStateWiseData();
    this.subscription = dashboardSvc.latestDataSubject$.subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response.data.regional);
      this.dataSource.sort = this.sort;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /*getStateWiseData() {
    this.dashboardSvc.getAllStats()
    .subscribe(response => {
      this.mapDisplayResponse(response);
    });

  }

  private mapDisplayResponse(response: any) {
    //this.dataSource = JSON.parse(response.data.regional);
    //this.dataSource = response.data.regional;
    this.dataSource = new MatTableDataSource(response.data.regional);
    this.dataSource.sort = this.sort;
    console.log("allStatesData: "+this.dataSource);
  }*/

}

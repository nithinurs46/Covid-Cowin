import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  allStatsUrl: string = "https://api.rootnet.in/covid19-in/stats/latest";
  testingHistoryUrl:string = "https://api.rootnet.in/covid19-in/stats/testing/history";
  contactsUrl:string = "https://api.rootnet.in/covid19-in/contacts";
  statsHistoryUrl:string = "https://api.rootnet.in/covid19-in/stats/history";

  constructor(private http: HttpClient) { }

  getAllStats(): Observable<any> {
    return this.http.get<any>(this.allStatsUrl);
  }
  
  /*private summarySubject = new Subject();
  summarySubject$ = this.summarySubject.asObservable();

  sendSummary(value:any) {
    this.summarySubject.next(value);
  }

  private allStatsSubject = new Subject();
  allStatsSubject$ = this.allStatsSubject.asObservable();
  sendAllStats(value:any) {
    this.allStatsSubject.next(value);
  }*/

  private latestDataSubject = new Subject();
  latestDataSubject$ = this.latestDataSubject.asObservable();
  sendLatestData(value:any){
    this.latestDataSubject.next(value);
  }

  getTestingStats(): Observable<any> {
    return this.http.get<any>(this.testingHistoryUrl);
  }

  getContactInfo(): Observable<any> {
    return this.http.get<any>(this.contactsUrl);
  }

  getStatsHistory():Observable<any> {
    return this.http.get<any>(this.statsHistoryUrl);
  }

}

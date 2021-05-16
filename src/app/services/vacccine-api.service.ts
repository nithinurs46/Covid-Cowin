import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class VacccineApiService {

  baseUrl:string = "https://cdn-api.co-vin.in/api/v2";
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  searchResult:any;
   setSearchResult(searchResult:any){
    this.searchResult = searchResult;
  }
   getSearchResult(){
    return this.searchResult;
  }

  findByPinCode(pincode:string) : Observable<any> {
    let date = this.datePipe.transform(+new Date(), 'dd-MM-yyyy');
    let url = this.baseUrl + "/appointment/sessions/public/calendarByPin?pincode="+pincode+'&date='+date;
    return this.http.get<any>(url);
  }

  getStates() : Observable<any> {
    let url = this.baseUrl + "/admin/location/states";
    return this.http.get<any>(url);
  }

  getCities(stateId:any) : Observable<any> {
    let url = this.baseUrl + "/admin/location/districts/" + stateId;
    return this.http.get<any>(url);
  }

  findByCity(city:any): Observable<any>{
    let date = this.datePipe.transform(+new Date(), 'dd-MM-yyyy');
    let url = this.baseUrl + "/appointment/sessions/public/calendarByDistrict?district_id="+city+'&date='+date;
    return this.http.get<any>(url);
    
    
  }
}

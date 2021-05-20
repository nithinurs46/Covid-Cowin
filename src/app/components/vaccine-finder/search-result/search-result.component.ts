import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacccineApiService } from 'src/app/services/vacccine-api.service';
import { Centers } from './centers.model';
import { Sessions } from './sessions.model';


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  vaccinesList:string[] = ["COVISHIELD","COVAXIN","SPUTNIK"];
  ageList:number[] = [18,45];

  constructor(private vaccineSvc: VacccineApiService, private activatedRoute: ActivatedRoute) { 
   
  }
  centers!: Centers[];
  filteredCenters!:Centers[];
  resultHeader: any = [];
  dateStr!: string;
  tdArray:number[] = [1,2,3,4,5,6,7];
  ngOnInit(): void {
    this.dateStr = this.activatedRoute.snapshot.queryParamMap.get('startDate')|| '';
    this.createHeader();
    this.centers = this.vaccineSvc.getSearchResult().centers;
    this.filteredCenters = this.centers;
    //this.centers = this.centers.filter(
      //c => c.fee_type === 'Paid');
  }

  
  createHeader() {
    let startDate;
    if(this.dateStr ===null || this.dateStr===''){
      startDate= new Date();
    } else {
      startDate= new Date(this.dateStr);
    }
    for (var i = 0; i < 7; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      this.resultHeader.push(currentDate.getDate() + "-" +
        this.MonthAsString(currentDate.getMonth()) + "-" +
        currentDate.getFullYear() + " " + this.DayAsString(currentDate.getDay()));
    }

  }

  MonthAsString(monthIndex: any) {
    return month[monthIndex];
  }

  DayAsString(dayIndex: any) {
    return weekdays[dayIndex];
  }
  public selectedName: any;
  highlightRow(row: any) {
    this.selectedName = row.name;
  }

  selectedVaccine: string[] = [];
  filterByVaccine(event:any, name:string){
    this.filteredCenters = [];
    if(event.target.checked){
      this.selectedVaccine.push(name);
      this.filterCenters();
    }else{
      this.selectedVaccine = this.selectedVaccine.filter(v=>v!=name);
      //this.centers = this.centers.filter(c=>c.sessions.filter(s=>s.vaccine='Covaxin'));
      if(this.selectedVaccine.length<=0){
        this.filteredCenters = this.centers;
      } else {
        this.filterCenters();
      }
    }
    console.log(this.filteredCenters);
  }

  selectedAge: number[] = [];
  filterByAge(event:any, age:number){
    this.filteredCenters = [];
    if(event.target.checked){
      this.selectedAge.push(age);
      this.filterCenters();
    }else{
      this.selectedAge = this.selectedAge.filter(v=>v!=age);
      if(this.selectedVaccine.length<=0){
        this.filteredCenters = this.centers;
      } else {
        this.filterCenters();
      }
    }
    console.log(this.filteredCenters);
  }

  filterCenters(){
    this.filteredCenters = [];
    let index:number = 0;

    //if all vaccine or none selected
    if(this.selectedVaccine.length===3 || this.selectedVaccine.length===0){
      //if all age or no age selected
      if(this.selectedAge.length===2 || this.selectedAge.length===0){
        this.filteredCenters = this.centers;
        return;
      }
    }
    //if no vaccine and both age selected
    if(this.selectedVaccine.length===0 && this.selectedAge.length===2){
      this.filteredCenters = this.centers;
      return;  
    }


      for(let c=0;c<this.centers.length;c++){
        let sessions = this.centers[c].sessions;
        let sessionArr:Sessions[] = [];
        let sIndex = 0;
        for(let s=0;s<sessions.length;s++){
          let session = sessions[s];
          //if 1 age is selected, vaccine is not selected
          if (this.selectedVaccine.length === 0 && this.selectedAge.length === 1) {
            if (this.selectedAge[0] === session.min_age_limit) {
              sessionArr[sIndex] = session;
              sIndex++;
            }
          }

          //If vaccine and age both are selected
          else if(this.selectedVaccine.length>0){
            for(let j=0;j<this.selectedVaccine.length;j++){
              if(this.selectedVaccine[j] === session.vaccine){
                if(this.selectedAge.length===1){
                    if(this.selectedAge[0] === session.min_age_limit){
                      sessionArr[sIndex] = session;
                      sIndex++;
                    }
                } else {
                  //if both age selected
                  sessionArr[sIndex] = session;
                  sIndex++
                }
                
              }
            }
          }
          
        }
        if(sessionArr.length>0){
          this.filteredCenters[index] = new Centers();
          this.filteredCenters[index].sessions = sessionArr;
          this.filteredCenters[index].center_id = this.centers[c].center_id;
          this.filteredCenters[index].name = this.centers[c].name;
          this.filteredCenters[index].address = this.centers[c].address;
          this.filteredCenters[index].state_name = this.centers[c].state_name;
          this.filteredCenters[index].district_name = this.centers[c].district_name;
          this.filteredCenters[index].block_name = this.centers[c].block_name;
          this.filteredCenters[index].pincode = this.centers[c].pincode;
          this.filteredCenters[index].fee_type = this.centers[c].fee_type;
          this.filteredCenters[index].vaccine_fees = this.centers[c].vaccine_fees;
          index++;
        }
      }
  }

}

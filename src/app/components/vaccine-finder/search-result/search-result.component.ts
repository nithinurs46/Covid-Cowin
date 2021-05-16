import { Component, OnInit } from '@angular/core';
import { VacccineApiService } from 'src/app/services/vacccine-api.service';


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private vaccineSvc: VacccineApiService) { }
  centers: any;
  resultHeader: any = [];
  ngOnInit(): void {
    this.createHeader();
    this.centers = this.vaccineSvc.getSearchResult().centers;
  }


  createHeader() {
    var startDate = new Date();
    for (var i = 0; i < 7; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      this.resultHeader.push(currentDate.getDate() + "-" +
        this.MonthAsString(currentDate.getMonth()) + "-" +
        currentDate.getFullYear() + "(" + this.DayAsString(currentDate.getDay()) + ")");
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

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { VacccineApiService } from 'src/app/services/vacccine-api.service';

@Component({
  selector: 'app-search-by-district',
  templateUrl: './search-by-district.component.html',
  styleUrls: ['./search-by-district.component.css']
})
export class SearchByDistrictComponent implements OnInit {

  states:any;
  cities:any;
  districtSearchForm!: FormGroup;
  response: any;
  loading = false;
  submitted = false;
  error:any;
  minDate = new Date();
  
  constructor(private formBuilder: FormBuilder,private vaccineSvc:VacccineApiService,
    private router: Router) {
    
   }

   get f() { return this.districtSearchForm.controls; }

  ngOnInit(): void {
    this.districtSearchForm = this.formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      startDate:['']
    });

    this.fetchStates();
  }

  fetchStates(){
    this.vaccineSvc.getStates().subscribe((response:any) => {
      this.states = response.states;
    });
  }

  fetchCities(event:any){
    this.vaccineSvc.getCities(event.target.value).subscribe((response:any) => {
      this.cities = response.districts;
    });
  }

  findCenters() {
    this.submitted = true;
    if (this.districtSearchForm.invalid) {
      return;
    }
    this.vaccineSvc.findByCity(this.districtSearchForm.value.city, this.districtSearchForm.value.startDate).subscribe((response: any) => {
      this.vaccineSvc.setSearchResult(response);
      this.router.navigate(['vaccineSearchResult'], { queryParams: { startDate: this.districtSearchForm.value.startDate}});
    }, fail => {
      this.error = fail.error.error;
    });

  }

}

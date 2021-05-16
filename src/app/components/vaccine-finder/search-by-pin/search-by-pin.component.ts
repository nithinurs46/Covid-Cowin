import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacccineApiService } from 'src/app/services/vacccine-api.service';

@Component({
  selector: 'app-search-by-pin',
  templateUrl: './search-by-pin.component.html',
  styleUrls: ['./search-by-pin.component.css']
})
export class SearchByPinComponent implements OnInit {

  constructor(private vaccineSvc:VacccineApiService, private router: Router) { }
  pincode: string = "";
  searchByPinForm: FormControl = new FormControl('', Validators.minLength(6));
  disableBtn = false;
  error:any;
  ngOnInit(): void {
    this.searchByPinForm.valueChanges
      .subscribe((changedObj: any) => {
        this.disableBtn = this.searchByPinForm.valid;
      });
  }

  searchByPin() {
    this.pincode = this.searchByPinForm.value
    this.vaccineSvc.findByPinCode(this.pincode).subscribe((response:any) => {
      this.vaccineSvc.setSearchResult(response);
      this.router.navigate(['/vaccineSearchResult']);
    },fail => {
      this.error = fail.error.error;
    });

    }


  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}

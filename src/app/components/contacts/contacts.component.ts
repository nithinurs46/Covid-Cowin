import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private dashboardSvc: DashboardService) { }
  contactsData: any;
  ngOnInit(): void {
    this.retreiveContacts();
  }
  retreiveContacts() {
    this.dashboardSvc.getContactInfo()
      .subscribe(response => {
        this.contactsData = response;
      });
  }
}

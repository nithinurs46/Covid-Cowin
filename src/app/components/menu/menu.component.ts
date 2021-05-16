import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isMenuCollapsed = true;
  public today: number = Date.now();
  constructor(public datepipe: DatePipe) { 
    setInterval(() => { this.today = Date.now() }, 1);
  }
  
  ngOnInit(): void {
  }

}

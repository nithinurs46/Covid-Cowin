import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StateWiseComponent } from './components/state-wise/state-wise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { TestStatsComponent } from './components/test-stats/test-stats.component';
import { InsightsComponent } from './components/insights/insights.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DatePipe } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { VaccineFinderComponent } from './components/vaccine-finder/vaccine-finder.component';
import { SearchByPinComponent } from './components/vaccine-finder/search-by-pin/search-by-pin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { SearchByDistrictComponent } from './components/vaccine-finder/search-by-district/search-by-district.component';
import { SearchResultComponent } from './components/vaccine-finder/search-result/search-result.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateWiseComponent,
    SummaryComponent,
    MenuComponent,
    TestStatsComponent,
    InsightsComponent,
    LineChartComponent,
    ApiListComponent,
    ContactsComponent,
    BarChartComponent,
    VaccineFinderComponent,
    SearchByPinComponent,
    OnlyNumberDirective,
    SearchByDistrictComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

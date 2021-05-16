import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { InsightsComponent } from './components/insights/insights.component';
import { SearchResultComponent } from './components/vaccine-finder/search-result/search-result.component';
import { VaccineFinderComponent } from './components/vaccine-finder/vaccine-finder.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  {path: 'insights', component:InsightsComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'api', component:ApiListComponent},
  {path:'vaccineFinder', component:VaccineFinderComponent},
  {path:'vaccineSearchResult', component:SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

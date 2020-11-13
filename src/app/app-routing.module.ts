import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';



const routes: Routes = [
  {path: 'dashboard', component: MainComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'company', component: CompanyDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

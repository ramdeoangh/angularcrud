import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

const appRoutes : Routes=[
  {path: 'list', component: ListEmployeeComponent },
  {path: 'create', component: CreateEmployeeComponent },
  {path: '', redirectTo: '/list', pathMatch: 'full' }
];

 

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

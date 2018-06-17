import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dashboard1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatCardModule,
	MatGridListModule,
	MatTabsModule,
	MatSnackBarModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatListModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

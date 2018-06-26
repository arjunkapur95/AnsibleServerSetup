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
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { DiscoveryAgentComponent } from './discovery-agent/discovery-agent.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dashboard1Component,
    HomeComponent,
    DiscoveryAgentComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	MatCardModule,
	MatGridListModule,
	MatTabsModule,
	MatSnackBarModule,
	MatButtonModule,
	MatListModule,
	FlexLayoutModule,
	MatToolbarModule,
	MatIconModule,
	MatSelectModule,
	MatFormFieldModule,
	MatInputModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

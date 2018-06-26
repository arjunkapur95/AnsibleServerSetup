import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	 constructor(public snackBar: MatSnackBar) {}

}

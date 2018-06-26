import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hosts = [
    {
      name: 'Linux01',
      ip: '192.168.0.1'
    },
    {
      name: 'Linux02',
      ip: '192.168.0.1'
    },
	{
      name: 'Linux03',
      ip: '192.168.0.1'
    }
  ];
  playbooks = [
    {
      name: 'java',
      description: 'Installs Java 1.7.0 On host machine'
    },
    {
      name: 'Jenkins',
      description: 'Instals Jenkin Version on host machine'
    },
	{
      name: 'Bamboo',
      description: 'Installs Bamboo on host'
    }
  ];
  Softwares = [
    {value: 'Jenkins', viewValue: 'Jenkins 1.1'},
    {value: 'GoCD', viewValue: 'GoCD 1.1'},
    {value: 'Bamboo', viewValue: 'Bamboo 1.1'}
  ];
  
}


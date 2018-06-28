import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

   constructor() { }
 
  ngOnInit() { }
 
}

   /*onChange(event)
   {
	 var input = event.target;
	 var reader = new FileReader();
	 //this.emptyArray.push("yes");
	 
	 reader.onload = function()
	 {
	 	var text = reader.result;
		this.text1 =text.split("\n");
		//console.log(text1);
	 };
	
	reader.readAsText(input.files[0]);
	console.log(reader.result.substring(0,200));
   }*/
   

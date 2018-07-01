import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery-agent',
  templateUrl: './discovery-agent.component.html',
  styleUrls: ['./discovery-agent.component.css']
})
export class DiscoveryAgentComponent implements OnInit {

  private fileText;
  private fileText1;
  private fileText2;
 
  constructor() { }
 
  ngOnInit() { }
 
    fileUpload(event) {
	console.log("fileupload");
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    }
	
	}
	fileUpload1(event) {
	console.log("fileupload1");
    var reader1 = new FileReader();
    reader1.readAsText(event.srcElement.files[0]);
    var me = this;
    reader1.onload = function () {
      me.fileText1 = reader1.result;
    }
	
	}
	fileUpload2(event) {
	console.log("fileupload2");
    var reader2 = new FileReader();
    reader2.readAsText(event.srcElement.files[0]);
    var me = this;
    reader2.onload = function () {
      me.fileText2 = reader2.result;
    }
	
	}

}

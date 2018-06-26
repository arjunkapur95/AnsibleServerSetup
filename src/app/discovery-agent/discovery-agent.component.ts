import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery-agent',
  templateUrl: './discovery-agent.component.html',
  styleUrls: ['./discovery-agent.component.css']
})
export class DiscoveryAgentComponent implements OnInit {

  private fileText;
 
  constructor() { }
 
  ngOnInit() { }
 
    fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    }
  }

}

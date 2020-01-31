import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
// import { myExtObject } from '../../assets/js/myJsFile';
// import * as jp  from 'myJsFile';

declare var myExtObject: any;
declare var webGlObject: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.loadScript('../../assets/js/myJsFile.js');
    // debugger;
    // call_me()
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}

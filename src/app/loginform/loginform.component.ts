import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'login-page',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    console.log('hit login');
  }
  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'user1' && password == 'user1') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}
  }
}

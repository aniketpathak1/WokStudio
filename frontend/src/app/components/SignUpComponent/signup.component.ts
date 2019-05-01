import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';
//import { UserSignUp } from 'src/app/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })

  export class SignUpComponent implements OnInit {
    //user: UserSignUp;
    ngOnInit(): void {
        
    }
    constructor(private loginService: LoginService, private router:Router, public activatedRoute: ActivatedRoute) {}

    //UserSignUp(username, password){
        
    //}

    navigate_signin() {
        this.router.navigate(['login'], { 
        });
      }
  }
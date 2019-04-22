import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { UserLogin } from 'src/app/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent implements OnInit {
    user: any;
    username
    password;
    ngOnInit(): void {
        
    }
    constructor(private loginService: LoginService, private router:Router, public activatedRoute: ActivatedRoute) {}

    UserLogin(username, password){
        let userObj = {username:'', password:''};
        userObj.username = username;
        userObj.password = password;
        console.log(userObj.username, userObj.password);
        return this.loginService.login(userObj)
        .subscribe(
            (res) => {
                this.user = res;
            }
        );
    }
  }
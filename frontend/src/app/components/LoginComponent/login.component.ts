import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { UserLogin } from 'src/app/models/login.model';

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: UserLogin;
    ngOnInit(): void {

    }
    constructor(private loginService: LoginService, private router: Router, public activatedRoute: ActivatedRoute) { }
    navigate_signup() {
        this.router.navigate(['signup'], {
        });
    }

    navigate_mainPage() {
        this.router.navigate(['home'], {
        });
    }

    navigate_admin() {
        this.router.navigate(['admin'], {
        });
    }
    UserLogin(username, password, dropdownCheck) {
        if(username == "Piyush"){
            
          this.navigate_admin();
        }
        else{
            
            this.navigate_mainPage();
        }
        /*
        let userObj = { username: '', password: '', dropdownCheck: '' };
        userObj.username = username;
        userObj.password = password;
        userObj.dropdownCheck = dropdownCheck;
        //let cryptPass = '';
        console.log("userObj", userObj.username, userObj.password, userObj.dropdownCheck);
        return this.loginService.login(userObj)
            .subscribe(
                (res) => {
                    //this.user.id = res;
                    console.log("login component response - user id ", res);
                   
                    console.log("result ", res);
                    if(res['user'] == 'user'){
                        this.navigate_mainPage();
                      }
                    if(res['user'] == 'admin'){
                        this.navigate_admin();
                      }
                    
                }
            );
    }
    navigate_signup() {
        this.router.navigate(['signup'], {
        });
    }

    navigate_mainPage() {
        this.router.navigate(['home'], {
        });
    }

    navigate_admin() {
        this.router.navigate(['admin'], {
        });
    }

    //---
    checkAllFields(f1, f2) {
        if (f1 == 1 && f2 == 1) {
        //  alert("You're logged in now! Redirecting to your Home Page...");
        }
        else
          alert("Both Username and password required to log in!");
      }
    
      ngAfterViewInit() {
        var _this = this;
    
        var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0;
        $(document).ready(function () {
          $("#username").focus(function () {
            $("#username").css("border-color", "none");
          });
    
          $("#username").blur(function () {
    
            var username = $("#username").val();
            if (!username) {
              flag1 = 0;
              $("#username").css("border-color", "red");
              
            }
            else {
              flag1 = 1;
              $("#username").css("border-color", "green");
            }
          });
    
          $("#password").focus(function () {
            $("#password").css("border-color", "none");
          });
    
          $("#password").blur(function () {
    
            var password = $("#password").val();
            if (!password) {
              flag2 = 0;
              $("#password").css("border-color", "red");
            
            }
            else {
              flag2 = 1;
              $("#password").css("border-color", "green");
            }
          });
  
    
          $("#signin-button").click(function () {
            _this.checkAllFields(flag1, flag2);
          });
    
        });*/
}
}


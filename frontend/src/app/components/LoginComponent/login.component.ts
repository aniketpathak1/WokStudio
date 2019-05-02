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

    UserLogin(username, password, dropdownCheck) {
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
}


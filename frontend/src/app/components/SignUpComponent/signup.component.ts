import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SignUpService } from 'src/app/services/SignUpService/signup.service';
import { SignUp } from 'src/app/models/signup.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class SignUpComponent implements OnInit {
    register: SignUp;
    ngOnInit(): void {
        
    }
    constructor(private signUpService: SignUpService, private router:Router, public activatedRoute: ActivatedRoute) {}

    SignUp(username, firstName, lastName, email, phone, password, confirmPassword){
        this.register.username = username;
        this.register.firstname = firstName;
        this.register.lastname = lastName;
        this.register.email = email;
        this.register.phone = phone;
        this.register.pwd = password;
        this.register.confirmpwd = confirmPassword;
        console.log(this.register);
        return this.signUpService.SignUp(this.register)
        .subscribe(
            (res) => {
                console.log(res);
            }
        );
    }
  }
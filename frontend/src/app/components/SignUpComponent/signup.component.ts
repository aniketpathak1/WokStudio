import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { LoginService } from 'src/app/services/LoginService/login.service';
//import { UserSignUp } from 'src/app/models/signup.model';
import { SignUpService } from 'src/app/services/SignUpService/signup.service';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
  //user: UserSignUp;
  ngOnInit(): void {

  }
  constructor(private signupService: SignUpService, private router: Router, public activatedRoute: ActivatedRoute) { }

  UserSignUp(firstnameinput, lastnameinput, emailinput, usernameinput, passwordinput, phoneinput)
  {
  let userObj = { firstnameinput: '', lastnameinput: '', emailinput: '', usernameinput: '', passwordinput: '', phoneinput: '' };
        userObj.firstnameinput = firstnameinput;
        userObj.lastnameinput = lastnameinput;
        userObj.emailinput = emailinput;
        userObj.usernameinput = usernameinput;
        userObj.passwordinput = passwordinput;
        userObj.phoneinput = phoneinput;

        //let cryptPass = '';
        console.log("userObj", userObj.usernameinput, userObj.firstnameinput, userObj.lastnameinput);
        return this.signupService.SignUp(userObj)
            .subscribe(
                    
                
            );
  }

  navigate_signin() {
    this.router.navigate(['login'], {
    });
  }

  checkAllFields(f1, f2, f3, f4, f5) {
    if (f1 == 1 && f2 == 1 && f3 == 1 && f4 == 1 && f5 == 1) {
      alert("Success");
    }
  }

  ngAfterViewInit() {
    var _this = this;

    var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0;
    $(document).ready(function () {
      $("#firstname-input").focus(function () {
        $("#firstsname-input").css("border-color", "none");
      });

      $("#firstname-input").blur(function () {

        var firstname_input = $("#firstname-input").val();
        if (!firstname_input) {
          flag1 = 0;
          $("#firstname-input").css("border-color", "red");
        }
        else {
          flag1 = 1;
          $("#firstname-input").css("border-color", "green");
        }
      });

      $("#lastname-input").focus(function () {
        $("#lastsname-input").css("border-color", "none");
      });

      $("#lastname-input").blur(function () {

        var lastname_input = $("#lastname-input").val();
        if (!lastname_input) {
          flag2 = 0;
          $("#lastname-input").css("border-color", "red");
        }
        else {
          flag2 = 1;
          $("#lastname-input").css("border-color", "green");
        }
      });

      $("#username-input").focus(function () {
        $("#username-input").css("border-color", "none");
      });

      $("#username-input").blur(function () {

        var username_input = $("#username-input").val();
        if (!username_input) {
          flag3 = 0;
          $("#username-input").css("border-color", "red");
        }
        else {
          var username_check = /^[a-zA-Z0-9]+$/;
          var isValid_name = username_check.test(username_input);
          if (isValid_name) {
            flag3 = 1;
            $("#username-input").css("border-color", "green");
          }
          else {
            flag3 = 0;
            $("#username-input").css("border-color", "red");
          }
        }
      });

      $("#email-input").focus(function () {
        $("#email-input").css("border-color", "none");
      });

      $("#email-input").blur(function () {

        var email_input = $("#email-input").val();
        if (!email_input) {
          flag4 = 0;
          $("#email-input").css("border-color", "red");
        }
        else {
          var email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
          var isValid_email = email_check.test(email_input);
          if (isValid_email) {
            flag4 = 1;
            $("#email-input").css("border-color", "green");
          }
          else {
            flag4 = 0;
            $("#email-input").css("border-color", "red");
          }

        }
      });

      $("#password-input").focus(function () {
        $("#password-input").css("border-color", "none");
      });

      $("#password-input").blur(function () {

        var password_input = $("#password-input").val();
        if (!password_input) {
          flag5 = 0;
          $("#password-input").css("border-color", "red");
        }
        else {
          if (password_input.length < 8) {
            flag5 = 0;
            $("#password-input").css("border-color", "red");
          }
          else {
            flag5 = 1;
            $("#password-input").css("border-color", "green");
          }
        }
      });


      $("#signup-button").click(function () {
        _this.checkAllFields(flag1, flag2, flag3, flag4, flag5);
      });

    });
  }
}
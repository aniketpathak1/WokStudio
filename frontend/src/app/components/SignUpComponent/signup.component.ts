import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { SignUpService } from 'src/app/services/SignUpService/signup.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
  //user: UserSignUp;
  ngOnInit(): void {

  }
  constructor(private SignUpService: SignUpService, private router: Router, public activatedRoute: ActivatedRoute) { }

  //UserSignUp(username, password){

  //}

  flag1 = 0;
  flag2 = 0;
  flag3 = 0;
  flag4 = 0;
  flag5 = 0;
  flag6 = 0;

  navigate_signin() {
    this.router.navigate(['login'], {
    });
  }

  ngAfterViewInit() {
    var _this = this;


    $(document).ready(function () {

      var msg = "";
      var infoFirstname = document.createElement("span");
      infoFirstname.id = "firstname_info";
      $("#firstname-input").after(infoFirstname);

      var infoLastname = document.createElement("span");
      infoLastname.id = "lastname_info";
      $("#lastname-input").after(infoLastname);

      var infoUsername = document.createElement("span");
      infoUsername.id = "username_info";
      $("#username-input").after(infoUsername);

      var infoEmail = document.createElement("span");
      infoEmail.id = "email_info";
      $("#email-input").after(infoEmail);

      var infoPassword = document.createElement("span");
      infoPassword.id = "password_info";
      $("#password-input").after(infoPassword);

      var infoContact = document.createElement("span");
      infoContact.id = "contact_info";
      $("#contact-input").after(infoContact);


      $("#firstname-input").focus(function () {
        $("#firstsname-input").css("border-color", "none");
      });

      $("#firstname-input").blur(function () {

        var firstname_input = $("#firstname-input").val();
        if (!firstname_input) {
          this.flag1 = 0;
          $("#firstname-input").css("border-color", "red");
          msg = "First name is required!";
          $('#firstname_info').show();
          $('#firstname_info').text(msg);
          $('#firstname_info').css("color", "red");
        }
        else {
          this.flag1 = 1;
          $("#firstname-input").css("border-color", "green");
          $('#firstname_info').hide();
        }
      });

      $("#lastname-input").focus(function () {
        $("#lastsname-input").css("border-color", "none");
      });

      $("#lastname-input").blur(function () {

        var lastname_input = $("#lastname-input").val();
        if (!lastname_input) {
          this.flag2 = 0;
          $("#lastname-input").css("border-color", "red");
          msg = "Last name is required!";
          $('#lastname_info').show();
          $('#lastname_info').text(msg);
          $('#lastname_info').css("color", "red");
        }
        else {
          this.flag2 = 1;
          $("#lastname-input").css("border-color", "green");
          $('#lastname_info').hide();
        }
      });

      $("#username-input").focus(function () {
        $("#username-input").css("border-color", "none");
      });

      $("#username-input").blur(function () {

        var username_input = $("#username-input").val();
        if (!username_input) {
          this.flag3 = 0;
          $("#username-input").css("border-color", "red");
          msg = "Username is required!";
          $('#username_info').show();
          $('#username_info').text(msg);
          $('#username_info').css("color", "red");
        }
        else {
          var username_check = /^[a-zA-Z0-9]+$/;
          var isValid_name = username_check.test(username_input);
          if (isValid_name) {
            this.flag3 = 1;
            $("#username-input").css("border-color", "green");
            $('#username_info').hide();
          }
          else {
            this.flag3 = 0;
            $("#username-input").css("border-color", "red");
            msg = "Username is not valid!";
            $('#username_info').show();
            $('#username_info').text(msg);
            $('#username_info').css("color", "red");
          }
        }
      });

      $("#email-input").focus(function () {
        $("#email-input").css("border-color", "none");
      });

      $("#email-input").blur(function () {

        var email_input = $("#email-input").val();
        if (!email_input) {
          this.flag4 = 0;
          $("#email-input").css("border-color", "red");
          msg = "Email is required!";
          $('#email_info').show();
          $('#email_info').text(msg);
          $('#email_info').css("color", "red");
        }
        else {
          var email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
          var isValid_email = email_check.test(email_input);
          if (isValid_email) {
            this.flag4 = 1;
            $("#email-input").css("border-color", "green");
            $('#email_info').hide();
          }
          else {
            this.flag4 = 0;
            $("#email-input").css("border-color", "red");
            msg = "Email is not valid!";
            $('#email_info').show();
            $('#email_info').text(msg);
            $('#email_info').css("color", "red");
          }

        }
      });

      $("#password-input").focus(function () {
        $("#password-input").css("border-color", "none");
      });

      $("#password-input").blur(function () {

        var password_input = $("#password-input").val();
        if (!password_input) {
          this.flag5 = 0;
          $("#password-input").css("border-color", "red");
          msg = "Password is required!";
          $('#password_info').show();
          $('#password_info').text(msg);
          $('#password_info').css("color", "red");
        }
        else {
          var strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          var is_strongPass = strongPass.test(password_input);
          if (!is_strongPass) {
            this.flag5 = 0;
            $("#password-input").css("border-color", "red");
            msg = "Password is too weak!";
            $('#password_info').show();
            $('#password_info').text(msg);
            $('#password_info').css("color", "red");
          }
          else {
            this.flag5 = 1;
            $("#password-input").css("border-color", "green");
            $('#password_info').hide();
          }
        }
      });

      $("#contact-input").focus(function () {
        $("#contact-input").css("border-color", "none");
      });

      $("#contact-input").blur(function () {

        var contact_input = $("#contact-input").val();
        if (!contact_input) {
          this.flag6 = 0;
          $("#contact-input").css("border-color", "red");
          msg = "Contact number is required!";
          $('#contact_info').show();
          $('#contact_info').text(msg);
          $('#contact_info').css("color", "red");
        }
        else {
          var digits = /^[0-9]+$/;
          var is_phone = digits.test(contact_input);
          if (is_phone == true && contact_input.length == 10) {
            this.flag6 = 1;
            $("#contact-input").css("border-color", "green");
            $('#contact_info').hide();
          }
          else {
            this.flag6 = 0;
            $("#contact-input").css("border-color", "red");
            msg = "Contact number is not valid!";
            $('#contact_info').show();
            $('#contact_info').text(msg);
            $('#contact_info').css("color", "red");
          }
        }
      });

    });
  }

  checkAllFields(f1, f2, f3, f4, f5, f6) {
    var display = "";
    if (f1 == 1 && f2 == 1 && f3 == 1 && f4 == 1 && f5 == 1 && f6 == 1) {
      display = "<div class='alert alert-success' role='alert'>You have been registered successfully!</div>";
      //$('#signup-button').after(display);
      //$('.alert').fadeOut(2000);
     

        this.router.navigate(['login'], {})
      
    }
    else if (f1 == 0 && f2 == 0 && f3 == 0 && f4 == 0 && f5 == 0 && f6 == 0) {
      display = "<div class='alert alert-success' role='alert'>All fields are mandatory!</div>";
      //$('#signup-button').after(display);
      //$('.alert').fadeOut(2000);
    }
    else {
      display = "<div class='alert alert-success' role='alert'>Some fields are empty or invalid!</div>";
      //$('#signup-button').after(display);
      //$('.alert').fadeOut(2000);
    }
  }

  register(firstname, lastname, email, username, password, contact) {
    this.router.navigate(['login']);
    console.log("vghv");
    console.log(this.flag1,this.flag2);
    var display = "";
    
      let obj = { firstname: '', lastname: '', email: '', username: '', password: '', contact: '' };
      obj.firstname = firstname;
      obj.lastname = lastname;
      obj.email = email;
      obj.username = username;
      obj.password = password;
      obj.contact = contact;
      return this.SignUpService.SignUp(obj).subscribe(
        (res) => {
          if(res>0){
            console.log("jj");
            this.router.navigate(['login']);
            display = "<div class='alert alert-success' role='alert'>You have been registered successfully!</div>";
          }
        }
      )
    }
}
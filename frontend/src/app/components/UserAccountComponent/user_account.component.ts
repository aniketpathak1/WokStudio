import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserAccountService } from 'src/app/services/UserAccountService/useraccount.service';
import { UserProfile } from 'src/app/models/userprofile.model';
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './user_account.component.html',
  styleUrls: ['./user_account.component.css']
})

export class UserAccountComponent implements OnInit {
  constructor(private UserAccountService: UserAccountService, private router: Router, public activatedRoute: ActivatedRoute) { }
  products;
  User: UserProfile;
  id = 1;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  pwd: string;
  address: string;
  contact: number;
  fullName: string;
  newemail: string;
  newcontact: string;
  newpwd: string;
  confirmpwd: string;
  streetAdd: string;
  aptAdd: string;
  cityAdd: string;
  stateAdd: string;
  zipAdd: string;
  infomsgName: string;
  infomsgEmail: string;
  infomsgPwd: string;
  infomsgContact: string;
  infomsgAddress: string;
  ngOnInit() {
    this.GetUserDetails(this.id);
    this.GetUserFavorites(this.id);
  }


  navigate_back() {
    this.router.navigate(['home'], {
    });
  }

  navigate_signin() {
    this.router.navigate(['login'], {
    });
  }

  GetUserFavorites(userId) {
    let result = [];
    return this.UserAccountService.getFavProductIds(userId).subscribe(
      (res) => {
        console.log(res);
        res.forEach(element => {
          console.log("element",element);
          let prodId = element['productId'];
          return this.UserAccountService.getFavProducts(prodId).subscribe(
            (res) => {
              console.log(res);
              result.push(res);
              console.log("result", result);
            }
          )
        });
        this.products = result as string[];
        console.log("this.products",this.products);
      }
    )

  }

  GetFavProductId(userId) {
    return this.UserAccountService.getFavProducts(userId).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  GetUserDetails(userId) {
    console.log("Get details", userId);
    return this.UserAccountService.getUserDetails(userId).subscribe(
      (result) => {
        let data = result[0] as string[];
        this.fullName = data['firstName'] + " " + data['lastName'];
        this.firstname = data['firstName'];
        this.contact = data['phoneint'];
        this.lastname = data['lastName'];
        this.email = data['emailAddress'];
        let temp = data['address'];
        let tempAdd = temp.split(",");
        this.streetAdd = tempAdd[0];
        this.aptAdd = tempAdd[1];
        this.cityAdd = tempAdd[2];
        this.stateAdd = tempAdd[3];
        this.zipAdd = tempAdd[4];
        console.log(this.streetAdd, this.aptAdd,
          this.cityAdd,
          this.stateAdd,
          this.zipAdd);
      })
  }
  UpdateUserName(firstname, lastname) {
    let userObj = { id: this.id, firstname: '', lastname: '' };
    userObj.firstname = firstname;
    userObj.lastname = lastname;
    return this.UserAccountService.updateUserName(userObj).subscribe(
      (res) => {
        console.log(res);
        if (res[1] > 0) {
          console.log("updated success")
          this.fullName = firstname + " " + lastname;
          this.infomsgName = "Updated Successfully";
        }
        else {
          this.infomsgName = "Error!!";
        }
      }
    )
  }
  UpdateEmail(newemail) {
    let userObj = { id: this.id, newemail: '' };
    userObj.newemail = newemail;
    return this.UserAccountService.updateUserEmail(userObj).subscribe(
      (res) => {
        console.log(res);
        if (res[1] > 0) {
          console.log("updated success")
          this.email = newemail;
          this.infomsgEmail = "Updated Successfully";
        }
        else {
          this.infomsgEmail = "Error!!";
        }
      }
    )
  }
  UpdateContact(contact) {
    let userObj = { id: this.id, contact: '' };
    userObj.contact = contact;
    return this.UserAccountService.updateUserConatct(userObj).subscribe(
      (res) => {
        console.log(res);
        if (res[1] > 0) {
          console.log("updated success")
          this.contact = contact;
          this.infomsgContact = "Updated Successfully";
        }
        else {
          this.infomsgContact = "Error!!";
        }
      }
    )
  }
  UpdatePwd(newpwd, confirmpwd) {
    console.log("update pwd");
    let userObj = { id: this.id, newpwd: '', confirmpwd: '' };
    userObj.newpwd = newpwd;
    userObj.confirmpwd = confirmpwd;
    return this.UserAccountService.updateUserPwd(userObj).subscribe(
      (res) => {
        console.log(res);
        if (res[1] > 0) {
          console.log("updated success")
          this.infomsgPwd = "Updated Successfully";
        }
        else {
          this.infomsgPwd = "Error!!";
        }
      }
    )
  }

  ClearMessage() {
    this.infomsgName = '';
    this.infomsgPwd = '';
    this.infomsgEmail = '';
    this.infomsgContact = '';
  }

  UpdateAddress(streetAdd, aptAdd, cityAdd, stateAdd, zipAdd) {
    let addObj = { id: this.id, address: '' };
    addObj.address = streetAdd + ',' + aptAdd + ',' + cityAdd + ',' + stateAdd + ',' + zipAdd;
    return this.UserAccountService.updateAddress(addObj).subscribe(
      (res) => {
        if (res[1] > 0) {
          console.log("updated success")
          this.infomsgAddress = "Updated Successfully";
        }
        else {
          this.infomsgAddress = "Error!!";
        }
      }
    )
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/AdminServices/admin.services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  action: String;
  addProducts: boolean;
  showProducts: boolean;
  product: Product;
  cusines = {};
  categories = {};
  foodTypes = {};
  foodPreferences = {};
  category = 'Select the protein';
  cusine = 'Select the cuisine';
  foodType = 'Select the food type';
  foodPref = 'Select the food preference';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params['actions']);
      if(!params['actions']){
        this.action = "addAdmin";
      }
      else if(params['actions'] == "addProducts"){
        this.action = params['actions'];
        this.GetProductCategories(); //get proteins
        this.GetProductCuisines();
        this.GetProductPreferences();
        this.GetProductTypes();
      }
      else if(params['actions'] == "showProducts"){
        this.action = params['actions'];
      }
      else{
        this.action = params['actions'];
      }
    })
  }
  constructor(private AdminServices: AdminServices, private router: Router, public activatedRoute: ActivatedRoute) { }
  GetProductCategories(){
    //console.log("Get details");
    return this.AdminServices.getProductCategories().subscribe(
      (result) => {
        //console.log("getProductCategories", result);
        this.categories = result;
        //console.log(this.categories);
      })
  }
  GetProductCuisines(){
    //console.log("Get details");
    return this.AdminServices.getProductCuisines().subscribe(
      (result) => {
        //console.log("getProductCuisines", result);
        this.cusines = result;
        //console.log("getProductCuisines", this.cusines);
      })
  }
  GetProductTypes(){
    //console.log("Get details");
    return this.AdminServices.getProductTypes().subscribe(
      (result) => {
        //console.log("getProductTypes", result);
        this.foodTypes = result;
        //console.log(this.foodTypes);
      })
  }
  GetProductPreferences(){
    //console.log("Get details");
    return this.AdminServices.getProductPreferences().subscribe(
      (result) => {
        //console.log("getProductPreferences", result);
        this.foodPreferences = result;
        //console.log(this.foodPreferences);
      })
  }

  AddProductToDB(cusine,foodType,protein,foodPref,Name,price,Image) {
    console.log(cusine,foodType,protein,foodPref,Name,price,Image);
    let product = {title:'', price:'', cuisine:'', foodPref: '', type:'', protein:'', imagePath:''};
    product.title = Name;
    product.price = price;
    product.cuisine = cusine;
    product.foodPref = foodPref;
    product.type = foodType;
    product.protein = protein;
    product.imagePath = Image;
    return this.AdminServices.AddProductinDB(product).subscribe(
      (result) => {
        console.log(result);
      })
  }

  AddAdminToDB(firstName, lastName, email, username, pwd){
    console.log("AddAdminToDB", firstName, lastName, email, username, pwd);
    let adminUser = {firstName: '', lastName: '', email: '', username: '', pwd: ''};
    adminUser.firstName = firstName;
    adminUser.lastName = lastName;
    adminUser.email = email;
    adminUser.username = username;
    adminUser.pwd = pwd;
    return this.AdminServices.AddAdmininDB(adminUser).subscribe(
      (result) => {
        console.log(result);
      })
  }

  AddProduct(){
    this.router.navigate(['admin'], {
      queryParams:{
        actions: "addProducts"
      }
    })
  }
  DisplayProducts(){
    this.router.navigate(['admin'], {
      queryParams:{
        actions: "showProducts"
      }
    })
  }
  AddAdmin(){
    this.router.navigate(['admin'], {
      queryParams:{
        actions: "addAdmin"
      }
    })
  }
  UpdateDeleteProd(){
    this.router.navigate(['admin'], {
      queryParams:{
        actions: "updateDeleteProd"
      }
    })
  }
}
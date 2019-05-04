import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/AdminServices/admin.services';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

/*class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}*/

export class AdminComponent implements OnInit {
  action: String;
  prodTitle: string;
  Image: string;
  updateCuisine: string;
  updateFoodType: string;
  updateCategory: string;
  updateFoodPref: string;
  Name: string;
  price: number;
  cusines = {};
  categories = {};
  foodTypes = {};
  foodPreferences = {};
  category = 'Select the protein';
  cusine = 'Select the cuisine';
  foodType = 'Select the food type';
  foodPref = 'Select the food preference';
  products = {};
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params['actions']);
      if (!params['actions']) {
        this.action = "addAdmin";
      }
      else if (params['actions'] == "addProducts") {
        this.action = params['actions'];
        this.GetProductCategories(); //get proteins
        this.GetProductCuisines();
        this.GetProductPreferences();
        this.GetProductTypes();
      }
      else if (params['actions'] == "showProducts") {
        this.action = params['actions'];
      }
      else {
        this.action = params['actions'];
      }
    })
  }
  constructor(private AdminServices: AdminServices, private router: Router, public activatedRoute: ActivatedRoute) { }
  GetProductCategories() {
    return this.AdminServices.getProductCategories().subscribe(
      (result) => {
        this.categories = result;
      })
  }
  GetProductCuisines() {
    return this.AdminServices.getProductCuisines().subscribe(
      (result) => {
        this.cusines = result;
      })
  }
  GetProductTypes() {
    return this.AdminServices.getProductTypes().subscribe(
      (result) => {
        this.foodTypes = result;
      })
  }
  GetProductPreferences() {
    return this.AdminServices.getProductPreferences().subscribe(
      (result) => {
        this.foodPreferences = result;
      })
  }

  navigate_home()
  {
    this.router.navigate(['home']);
  }

  AddProductToDB(cusine, foodType, protein, foodPref, Name, price, Image) {
    var msg = "Product Successfully Added";
    var info = document.createElement("span");
    info.id = "info";
    $("#submit").after(info);
    $('#info').show();
    $('#info').css("color","green");
    $('#info').text(msg);


    console.log("Add prod to db", cusine, foodType, protein, foodPref, Name, price, Image);
    let product = { title: '', price: '', cuisine: '', foodPref: '', type: '', protein: '', imagePath: '' };
    product.title = (Name)?Name:'';
    product.price = (price)?price:0;
    product.cuisine = (cusine)?cusine:'';
    product.foodPref = (foodPref)?foodPref:'';
    product.type = (foodType)?foodType:'';
    product.protein = (protein)?protein:'';
    product.imagePath = (Image) ? Image : '';

    return this.AdminServices.AddProductinDB(product).subscribe(
      (result) => {
        console.log(result);
      })
  }

  
  AddAdminToDB(firstName, lastName, email, username, pwd) {

    var msg = "Admin Successfully Added";
    var info = document.createElement("span");
    info.id = "info";
    $("#adminSubmit").after(info);
    $('#info').show();
    $('#info').css("color","green");
    $('#info').text(msg);

    //console.log("AddAdminToDB", firstName, lastName, email, username, pwd);
    let adminUser = { firstName: '', lastName: '', email: '', username: '', pwd: '' };
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

  GetAllProducts() {
    return this.AdminServices.getAllProducts().subscribe(
      (result) => {
        console.log("all products", result);
        this.products = result;
      }
    )
  }

  AddProduct() {
    this.router.navigate(['admin'], {
      queryParams: {
        actions: "addProducts"
      }
    })
  }
  DisplayProducts() {
    this.GetAllProducts();
    this.router.navigate(['admin'], {
      queryParams: {
        actions: "showProducts"
      }
    })
  }
  AddAdmin() {
    this.router.navigate(['admin'], {
      queryParams: {
        actions: "addAdmin"
      }
    })
  }
  UpdateDeleteProd(prodName) {
    this.prodTitle = prodName;
    console.log("prod title ", this.prodTitle);
    console.log("product name", prodName);
    this.GetProductDetails(prodName);
    this.GetProductCategories(); //get proteins
    this.GetProductCuisines();
    this.GetProductPreferences();
    this.GetProductTypes();
    this.router.navigate(['admin'], {
      queryParams: {
        actions: "updateDeleteProd"
      }
    })
  }
  GetProductDetails(prodName) {
    return this.AdminServices.getProdDetails(prodName).subscribe(
      (result) => {
        let response = result[0] as String[];
        this.updateCuisine = response['cuisineName'];
        this.updateFoodType = response['foodType'];
        this.updateCategory = response['proteinName'];
        this.updateFoodPref = response['foodPreference'];
        this.Name = prodName;
        this.price = response['price'];
      })
  }
  UpdateProduct(prodTitle, Name, price, imagePath, updateFoodType, updateCuisine, updateCategory, updateFoodPref) {
    console.log(prodTitle, Name, price, imagePath, updateFoodType, updateCuisine, updateCategory, updateFoodPref);
    let updatedProdObj = { prodTitle: '', Name: '', price: '', imagePath: '', updateFoodType: '', updateCuisine: '', updateCategory: '', updateFoodPref: '' };
    updatedProdObj.prodTitle = prodTitle;
    updatedProdObj.Name = Name;
    updatedProdObj.price = price;
    updatedProdObj.imagePath = (imagePath) ? imagePath : "";
    updatedProdObj.updateFoodType = updateFoodType;
    updatedProdObj.updateCategory = updateCategory;
    updatedProdObj.updateCuisine = updateCuisine;
    updatedProdObj.updateFoodPref = updateFoodPref;
    return this.AdminServices.updateProductDetails(updatedProdObj).subscribe(
      (result) => {
        console.log("updated rows ", result[1]);
      })
  }
  DeleteProduct(prodTitle) {
    console.log("prodTitle ", prodTitle);
    let obj = { prodTitle: '' };
    obj.prodTitle = prodTitle;
    return this.AdminServices.deleteProduct(obj).subscribe(
      (result) => {
        console.log("updated rows ", result);
      })
  }

  onSelectFile(file) {
    let imageName = file.substring(file.lastIndexOf("\\") + 1, file.length);
    console.log(imageName);
    this.Image = imageName;
  }

}

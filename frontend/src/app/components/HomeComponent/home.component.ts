
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/AdminServices/admin.services';
import { filter } from 'rxjs/operators';
import { isNumber } from 'util';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ratingFilter: number;
  priceFilter: number;
  titleProduct: string;
  filePath: string;
  products;
  productIdsCart = [];
  sortValue: string;
  options = ['Pricing (Low to High)', 'Rating (High to Low)'];
  option = "Default";

  p: number = 1;
  constructor(private AdminServices: AdminServices, private router: Router, public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.GetAllProductsDetails()
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      var _this = this;
      $(".dropdown-toggle").hover(function () {
        $(this).addClass("addButtonEffect");
        $(this).removeClass("removeButtonEffect");
      }, function () {
        $(this).removeClass("addButtonEffect");
        $(this).addClass("removeButtonEffect");
      });
      $('.item-fav').click(function()
      {
        $(this).removeClass('far fa-heart');
        $(this).addClass('fas fa-heart');
      });


    });
  }

  navigate_signin() {
    this.router.navigate(['login'], { 
    });
  }

  navigate_user_account() {
    this.router.navigate(['user_account'], { 
    });
  }

  GetAllProductsDetails() {
    console.log("GetAllProductsDetails");
    return this.AdminServices.getAllProductDetails().subscribe(
      (res) => {
        let data = res;
        this.products = data;
        console.log(data);
      }
    )
  }

  SearchProducts(searchText) {
    let filterData = [];
    let data = this.products;
    if (!searchText) {
      this.GetAllProductsDetails();
    }
    else {
      for (let i in data) {
        if (data[i]['cuisineName'] == searchText || data[i]['foodPreference'] == searchText || data[i]['foodType'] == searchText || data[i]['proteinName'] == searchText || data[i]['title'].includes(searchText)) {
          filterData.push(data[i]);
        }
      }
    }
    this.products = filterData as string[];
    console.log(this.products);
  }

  RatingFilter(filterRating) {
    console.log(filterRating);
    if (filterRating) {
      this.ratingFilter = filterRating;
    }
  }
  PriceFilter(filterPrice) {
    console.log(filterPrice);
    if (filterPrice) {
      this.priceFilter = filterPrice;
    }
  }

  ApplyFilters() {
    if (this.products.length == 0) {
      this.GetAllProductsDetails();
    }
    console.log("Apply filters", this.products);
    let filterData = [];
    if (!this.ratingFilter && !this.priceFilter) {
      this.GetAllProductsDetails();
    } else if(this.ratingFilter && !this.priceFilter){
      console.log("hi");
      let data = this.products;
      console.log(this.ratingFilter, this.priceFilter);
      for (let i in data) {
        if (data[i]['avgRating'] >= this.ratingFilter) {
          console.log("hi again");
          filterData.push(data[i]);
        }
      }
    }
    else if(!this.ratingFilter && this.priceFilter){
      console.log("hi");
      let data = this.products;
      console.log(this.ratingFilter, this.priceFilter);
      for (let i in data) {
        if (data[i]['price'] <= this.priceFilter) {
          console.log("hi again");
          filterData.push(data[i]);
        }
      }
    }
    else{
      console.log("hi");
      let data = this.products;
      console.log(this.ratingFilter, this.priceFilter);
      for (let i in data) {
        if (data[i]['price'] <= this.priceFilter && data[i]['avgRating'] >= this.ratingFilter) {
          console.log("hi again");
          filterData.push(data[i]);
        }
      }
    }
    this.products = filterData;
    console.log("filterData", filterData);
  }

  navigate_cart() {
    this.router.navigate(['cart'], {queryParams: {basket: this.productIdsCart}});
  }

  SortProducts(sortVal) {
    let data = this.products;
    if (sortVal == "Pricing (Low to High)") {
      data.sort((a,b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0);
    }
    else {
      data = data.sort(function (a, b) {
        data.sort((a,b) => (b.avgRating > a.avgRating) ? 1 : (b.avgRating < a.avgRating) ? -1 : 0);
      });

    }
    this.products = data;
  }

  SingleProdDetails(prodName){
    return this.AdminServices.getProdDetails(prodName).subscribe(
      (res) => {
        console.log(res);
        let data = res[0];
        this.titleProduct = data['title'];
        this.filePath = data['filePath'];
        console.log(this.titleProduct, this.filePath);
      }
    )
  }

  AddFavorite(prodName){
    console.log(prodName);
    let obj = {userId: 1,prodName: prodName};
    return this.AdminServices.addFavoriteProduct(obj).subscribe(
      (res) => {
        console.log("response", res);
      }
    )
  }

  AddToBasket(id){
    this.productIdsCart.push(id);
    console.log(this.productIdsCart);
  }
}


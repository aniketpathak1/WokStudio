import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var $:any;

@Component({
    selector: 'app-landing',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit {
    constructor(private router:Router, public activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
    }

    ngAfterViewInit(){
    $(document).ready(function(){
      var _this = this;
      $(".dropdown-toggle").hover(function(){
          $(this).addClass("addButtonEffect");
          $(this).removeClass("removeButtonEffect"); 
          }, function(){
          $(this).removeClass("addButtonEffect"); 
          $(this).addClass("removeButtonEffect"); 
      });
  });
}
  }
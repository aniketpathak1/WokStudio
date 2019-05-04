import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule, Routes, RoutesRecognized} from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
  })

  export class LandingPage implements OnInit {
    constructor(private router:Router, public activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
    }
    
    navigate_signin() {
        this.router.navigate(['login'], { 
        });
      }

      ngAfterViewInit(){
        var _this = this;
        $(document).ready(function(){
          $('#alert-message').hide();
          $("#index-search-btn").click(function(){
            var location = $("#location_name").val();
            if(!location)
            {
                $("#alert-message").show();
            }
            else
            {
                $("#alert-message").hide();
                _this.router.navigate(['login'],{});
            }
          });
        });
  }
  }
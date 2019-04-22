import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
  })

  export class LandingPage implements OnInit {
    constructor(private router:Router, public activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
    }

    login() {
        this.router.navigate(['login'], { 
        });
      }
  }
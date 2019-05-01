import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './user_account.component.html',
  styleUrls: ['./user_account.component.css']
})

export class UserAccountComponent implements OnInit {
  constructor(private router: Router, public activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
}
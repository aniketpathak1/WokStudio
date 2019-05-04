import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAccountService } from 'src/app/services/UserAccountService/useraccount.service';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
	selector: 'app-landing',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
	basket: any;
	response;
	totalAmount;
	quantity = 0;
	ngOnInit() {
		let data = this.route
			.queryParams
			.subscribe(params => {
				// Defaults to 0 if no query param provided.
				this.basket = params['basket'];
				console.log(this.basket);
				this.DisplayBasket(this.basket);
			});
	}

	constructor(private route: ActivatedRoute, private UserAccountService: UserAccountService) { }

	DisplayBasket(basket) {
		let total = 0;
		
		let basketIds = [];
		let result = [];
		basket.forEach(element => {
			basketIds.push(+element);
		});
		console.log(basketIds);
		let obj = { prodId: '' }
		basketIds.forEach(element => {
			console.log(element);
			return this.UserAccountService.getBasket(element).subscribe(
				(res) => {
					console.log(res);
					result.push(res);
					console.log("result", result);
					let price = res['price'];
					this.quantity = ++this.quantity;
					total += price * this.quantity;
					console.log(total);
					this.totalAmount = total;
				}
			)
		});
		this.response = result as string[];
		console.log("this.response", this.response);
		console.log(result);
	}

	remove(id) {
		let filterData = [];
		let total = 0;
		let data = this.response;
		for (let i in data) {
			if (data[i]['id'] != id) {
				filterData.push(data[i]);
				if (filterData.length > 0) {
					let price = data[i]['price'];
					let stock = data[i]['stockQty'];
					total += price * stock;
					console.log(total);
					this.totalAmount = total;
				}
				
			}
			else{
				this.totalAmount = 0;
			}
		}
		this.response = filterData as string[];
		console.log(this.response);
	}

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AdminServices {
    options: any;
    constructor(private http: HttpClient) { }
    private addProdUrl = 'http://localhost:8081/api/addProduct';
    private addAdminUrl = 'http://localhost:8081/api/addAdmin';
    getProductCategories(): Observable<any> {
        console.log("admin services");
        //console.log(this.http.get<any>('http://localhost:8082/api/productcategory'));
        return this.http.get<any>('http://localhost:8081/api/productCategories');
    }
    getProductTypes(): Observable<any> {
        console.log("admin services");
        //console.log(this.http.get<any>('http://localhost:8082/api/productcategory'));
        return this.http.get<any>('http://localhost:8081/api/producTypes');
    }
    getProductCuisines(): Observable<any> {
        console.log("admin services");
        //console.log(this.http.get<any>('http://localhost:8082/api/productcategory'));
        return this.http.get<any>('http://localhost:8081/api/productCuisines');
    }
    getProductPreferences(): Observable<any> {
        console.log("admin services");
        //console.log(this.http.get<any>('http://localhost:8082/api/productcategory'));
        return this.http.get<any>('http://localhost:8081/api/productPreferences');
    }

    AddProductinDB(obj): Observable<any> {
        const url = `${this.addProdUrl}`;
        return this.http.post<any>(url,obj,httpOptions);
    }

    AddAdmininDB(obj): Observable<any>{
        const url = `${this.addAdminUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }
}



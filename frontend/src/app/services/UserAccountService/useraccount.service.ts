import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserAccountService {
    options: any;
    constructor(private http: HttpClient) { }
    private updateNameUrl = 'http://localhost:8082/api/updateUserName';
    private updateEmailUrl = 'http://localhost:8082/api/updateUserEmail';
    private updateContactUrl = 'http://localhost:8082/api/updateUserContact';
    private updatePwdUrl = 'http://localhost:8082/api/updateUserPwd';
    private updateAddressUrl = 'http://localhost:8082/api/updateAddress';
    getUserDetails(userId): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/getUserDetails', {
            params:{
                userId: userId
            }
        });
    }
    updateUserName(obj): Observable<any> {
        const url = `${this.updateNameUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    updateUserEmail(obj): Observable<any> {
        const url = `${this.updateEmailUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    updateUserConatct(obj): Observable<any> {
        const url = `${this.updateContactUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }
    updateUserPwd(obj): Observable<any> {
        const url = `${this.updatePwdUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    updateAddress(obj): Observable<any> {
        const url = `${this.updateAddressUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    getFavProducts(prodId): Observable<any> {
        console.log("getFavProducts")
        return this.http.get<any>('http://localhost:8082/api/getFavoriteProds', {
            params:{
                id: prodId
            }
        });
    }

    getBasket(obj): Observable<any> {
        console.log("obj",obj);
        return this.http.get<any>('http://localhost:8082/api/getBasket', {
            params:{
                basket: obj
            }
        });
    }

    getFavProductIds(userId): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/getFavProdIds', {
            params:{
                id: userId
            }
        });
    }
}



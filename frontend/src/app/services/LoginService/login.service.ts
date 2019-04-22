import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/login.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loginUrl = 'http://localhost:8080/api/customer/login';  // URL to web api
    options: any;
    constructor(private http: HttpClient) { }

    login(obj): Observable<any>{
        const url = `${this.loginUrl}`
        return this.http.post<any>(url, obj, httpOptions);
    }
}



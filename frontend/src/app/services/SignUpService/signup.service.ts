import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class SignUpService {
    private signUpUrl = 'http://localhost:8081/api/customer/signup';  // URL to web api
    options: any;
    constructor(private http: HttpClient) { }

    SignUp(obj): Observable<any> {
        const url = `${this.signUpUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }
}



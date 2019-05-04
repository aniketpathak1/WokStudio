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
    options: any;
    constructor(private http: HttpClient) { }

    private signUpUrl = 'http://localhost:8082/api/signUp';

    SignUp(obj): Observable<any> {
        const url = `${this.signUpUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

}



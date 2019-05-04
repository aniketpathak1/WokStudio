import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
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
    private addProdUrl = 'http://localhost:8082/api/addProduct';
    private addAdminUrl = 'http://localhost:8082/api/addAdmin';
    private getProdUrl = 'http://localhost:8082/api/getAllProducts';
    private getProdDetailsUrl = 'http://localhost:8082/api/getProdDetails';
    private updateProductUrl = 'http://localhost:8082/api/updateProdDetails';
    private deleteProductUrl = 'http://localhost:8082/api/deleteProduct';
    private uploadImageUrl = 'http://localhost:8082/api/imageupload';
    private addFavProdUrl = 'http://localhost:8082/api/addFavProduct';

    getProductCategories(): Observable<any> {
        console.log("admin services");
        return this.http.get<any>('http://localhost:8082/api/productCategories');
    }

    getProductTypes(): Observable<any> {
        console.log("admin services");
        return this.http.get<any>('http://localhost:8082/api/producTypes');
    }

    getProductCuisines(): Observable<any> {
        console.log("admin services");
        return this.http.get<any>('http://localhost:8082/api/productCuisines');
    }

    getProductPreferences(): Observable<any> {
        console.log("admin services");
        return this.http.get<any>('http://localhost:8082/api/productPreferences');
    }

    AddProductinDB(obj): Observable<any> {
        const url = `${this.addProdUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    AddAdmininDB(obj): Observable<any> {
        const url = `${this.addAdminUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    getAllProducts(): Observable<any> {
        return this.http.get<any>(this.getProdUrl);
    }

    getProdDetails(prodName): Observable<any> {
        console.log("prod name", prodName);
        return this.http.get<any>(this.getProdDetailsUrl, {
            params: {
                productName: prodName
            }
        });
    }

    updateProductDetails(obj): Observable<any> {
        const url = `${this.updateProductUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    deleteProduct(obj): Observable<any> {
        const url = `${this.deleteProductUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    uploadImage(obj): Observable<any> {
        const url = `${this.uploadImageUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    getAllProductDetails() : Observable<any> {
        console.log("getAllProductDetails");
        return this.http.get<any>('http://localhost:8082/api/getAllProdDetails');
    }

    addFavoriteProduct(obj): Observable<any> {
        const url = `${this.addFavProdUrl}`;
        return this.http.post<any>(url, obj, httpOptions);
    }

    GetCuisineId(cuName): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/GetCuisineId', {
            params: {
                cuName: cuName
            }
        });
    }
    
    GetfoodPrefId(fpName): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/GetfoodPrefId', {
            params: {
                fpName: fpName
            }
        });
    }
    
    GettypeId(ftName): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/GettypeId', {
            params: {
                ftName: ftName
            }
        });
    }
    
    GetproteinId(proName): Observable<any> {
        return this.http.get<any>('http://localhost:8082/api/GetproteinId', {
            params: {
                proName: proName
            }
        });
    }

}



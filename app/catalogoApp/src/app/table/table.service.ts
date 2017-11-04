import {Injectable} from '@angular/core';
import {IDog} from './IDog';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProductService{
    //private _url ='https://jsonplaceholder.typicode.com/photos';
    private _url = 'http://localhost:8000/products';

    constructor( private _http: HttpClient){}

    getProducts(): Observable <IDog[]> {
        return this._http.get <IDog[]>(this._url)
        .do(data => console.log(data))
        .catch(this.handleError);

    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }

    addProducts(perro:IDog): Observable <IDog> {
        return this._http.post(this._url, perro ).do(data => console.log(data)).catch(this.handleError);
    }

    removeProducts(dog:String): Observable <IDog>{
        console.log("Entro a removeProducts");
        console.log("id"+dog);
        
        return this._http.delete(this._url+"/"+dog).do(data=>console.log('Data'+ JSON.stringify(data))).catch(this.handleError);
       
    }
    
    putProducts(id:String, dog:IDog): Observable <IDog>{
        return this._http.put(this._url+"/"+id, dog).do(data=>console.log('Data'+ JSON.stringify(data))).catch(this.handleError);
    }
    


}

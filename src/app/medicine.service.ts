import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'cypress/types/lodash';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http : HttpClient) { }

  getProduct():Observable<Medicine[]>{
    return this.http.get<Medicine[]>("http://localhost:3000/posts");
  //    .pipe(map((res:any)=>{
  //      return res;
  //    }))
   }
}

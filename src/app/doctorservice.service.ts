import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { doctor } from 'doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  apiUrl=[];

  constructor(private http: HttpClient) { }

  getAll():Observable<doctor[]>{

    let apiUrl ='http://localhost:3000/doctor';

    return this.http.get<doctor[]>(apiUrl);

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Observable } from 'rxjs';
import { UpdateAppointment } from './update-appointment';
import { Addappointment } from './addappointment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

 private baseurl = 'https://localhost:44355/Appointment/';
 private baseaddurl ='https://localhost:44355/Appointment/Add';
  
 constructor(private http: HttpClient) {}

  //get All the Appointment

  getAll(): Observable<Booking[]> {
  return this.http.get<Booking[]>(this.baseurl);
  }

  //get the data with id

  get(id):Observable<Booking> {
    return this.http.get<Booking>(this.baseurl + id);
   }

   updateAppointment(id, bookRequest: Booking): Observable<Booking> {
    const updateRequest: UpdateAppointment = {
      name: bookRequest.name,
      phone: bookRequest.phone,
      email: bookRequest.email,
      dob: bookRequest.dob, 
      appdate:bookRequest.appdate,
      apptime:bookRequest.apptime,
      dname:bookRequest.dname
      
    }

    return this.http.put<Booking>(this. baseurl  + id, updateRequest);
  }

  deleteAppointment(id): Observable<Booking> {
    return this.http.delete<Booking>(this.baseurl +id);
  }

  addAppointment(bookRequest: Booking): Observable<Booking> {
    const addRequest: Addappointment = {
      name: bookRequest.name,
      phone: bookRequest.phone,
      email: bookRequest.email,
      dob: bookRequest.dob, 
      appdate:bookRequest.appdate,
      apptime:bookRequest.apptime,
      dname:bookRequest.dname
    };

    return this.http.post<Booking>(this.baseaddurl , addRequest);
  }


  
  
  



}

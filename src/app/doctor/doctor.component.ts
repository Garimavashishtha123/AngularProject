import { Component, OnInit } from '@angular/core';
import { doctor } from 'doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
 

  constructor(private doc: DoctorserviceService) {
   
  }
  ngOnInit(): void {
    
  }


 
}

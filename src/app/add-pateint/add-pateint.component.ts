import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute,Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Booking } from '../booking';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-pateint',
  templateUrl: './add-pateint.component.html',
  styleUrls: ['./add-pateint.component.css']
})
export class AddPateintComponent implements OnInit {

  id: string | null | undefined | number;
  date!: number | string

  bk: Booking = {
    id: 0,
    name: '',
    dob: '',
    phone:'',
    email: '',
    appdate:'',
    apptime:'',
    dname:'',

  }
  

  // @ViewChild('AppointmentDetailsForm') AppointmentDetailsForm?: NgForm;
  
 

  constructor(
    private readonly route: ActivatedRoute, private bookingservice:BookingService,
    private snackbar:MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = params.get('id');

        if (this.id) {

            this.bookingservice.get(this.id)
              .subscribe(
                (successResponse) => {
                  this.bk=successResponse;
                 
                },
                (errorResponse) => {
                  console.log(errorResponse);
                }
              );
          }
}  );
  }

  onUpdate():void{
    
    {
        this.bookingservice.updateAppointment(this.bk.id, this.bk)
          .subscribe(
            (successResponse) => {
              // Show a notification
              this.snackbar.open('Details updated successfully!', undefined, {
                duration: 2000
              });
              // setTimeout(() => {
              //   this.router.navigateByUrl('Booking-list');
              // }, 2000);
            },
            (errorResponse) => {
              // Log it
              console.log(errorResponse);
            }
          );
          }

  }

 // Delete the Appointment
  onDelete(): void {
    this.bookingservice.deleteAppointment(this.bk.id)
      .subscribe(
        (successResponse) => {
          console.log(successResponse);
          this.snackbar.open('Appointment deleted successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl('Booking-list');
          }, 2000);
        },
        (errorResponse) => {
          // Log
        }
        );
  }

}
  
 



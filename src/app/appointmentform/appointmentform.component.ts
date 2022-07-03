import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { ActivatedRoute,Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingService } from '../booking.service';
import { UpdateAppointment } from '../update-appointment';


@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrls: ['./appointmentform.component.css']
})
export class AppointmentformComponent implements OnInit {

  
  id: string | null | undefined | number;
  date!: number | string

  bk: Booking = {
    id:0,
    name: '',
    dob: '',
    phone:'',
    email: '',
    appdate:'',
    apptime:'',
    dname:'',

  }
  constructor(
    private readonly route: ActivatedRoute, private bookingservice:BookingService,
    private snackbar:MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Add the Appointment
  onAdd(): void {
      this.bookingservice.addAppointment(this.bk)
        .subscribe(
          (successResponse) => {
            this.snackbar.open('Appointment added successfully', undefined, {
              duration: 2000
            });

          },
          (errorResponse) => {
            // Log
            console.log(errorResponse);
          }
        );
    }
  } 



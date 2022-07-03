import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddPateintComponent } from './add-pateint/add-pateint.component';
// import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';

const routes: Routes = [
  // {path:'Booking-Appointment',component:BookingAppointmentComponent},
  // {path:'Add-Patient',component:AddPateintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

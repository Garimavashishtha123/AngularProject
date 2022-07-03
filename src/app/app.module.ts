import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

import { DoctorserviceService } from './doctorservice.service';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BookingService } from './booking.service';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

// import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddPateintComponent } from './add-pateint/add-pateint.component';
import { HomeComponent } from './home/home.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FreeCheckupComponent } from './free-checkup/free-checkup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { CartComponent } from './cart/cart.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FilterPipe } from './filter.pipe';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddPateintComponent,
    DoctorComponent,
    SearchDoctorComponent,
    HomeComponent,
    NewAppointmentComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    FreeCheckupComponent,
    AppointmentListComponent,
    AppointmentformComponent,
    CartComponent,
    MedicineComponent,
    FilterPipe,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatSelectModule , 
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
   
   

    RouterModule.forRoot([
      {path:'book-Medicine',component:MedicineComponent},
      {path:'Doctors',component:DoctorComponent},
      {path:'Add-Patient',component:AddPateintComponent},
      {path:'Add-Patient/:id',component:AddPateintComponent},
      {path:'',component:HomeComponent},
      {path:'New-Appointment',component:NewAppointmentComponent},
      {path:'About-Us',component:AboutUsComponent},
      {path:'Our-Services',component:OurServicesComponent},
      {path:'Free-Checkup',component:FreeCheckupComponent},
      {path:'Booking-list',component:AppointmentListComponent},
      {path:'Book-Appointment', component:AppointmentformComponent}
    ]),

    BrowserAnimationsModule
  ],
  
  providers: [BookingService,DoctorserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

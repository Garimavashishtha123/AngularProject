import { Component, OnInit,ViewChild } from '@angular/core';
import { BookingService } from '../booking.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from '../booking';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  book: Booking[] = [];
  displayedColumns: string[] = ['name','phone','email','dob', 'appdate','apptime','dname','edit'];
  dataSource: MatTableDataSource<Booking> = new MatTableDataSource<Booking>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private appservice:BookingService) { }

  ngOnInit(): void {
 
    //Fetch the Appointment
      this.appservice.getAll().subscribe(
        (successResponse) => {
          this.book = successResponse;
          this.dataSource = new MatTableDataSource<Booking>(this.book);

          if (this.matPaginator) {
            this.dataSource.paginator = this.matPaginator;
          }

          if (this.matSort) {
            this.dataSource.sort = this.matSort;
          }
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      
      );

  }
  filterList() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}

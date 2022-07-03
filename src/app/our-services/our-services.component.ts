import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {


  Image: string="assets/img/ICCU.svg";
  Image1: string="assets/img/ward.svg";
  Image2: string="assets/img/back.svg";

  constructor() { }

  ngOnInit(): void {
  }

}

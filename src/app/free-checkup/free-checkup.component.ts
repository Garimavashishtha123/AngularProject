import { Component, OnInit } from '@angular/core';
import { identity } from 'cypress/types/lodash/index.js';
import {uid} from '../connect/uid.js'

@Component({
  selector: 'app-free-checkup',
  templateUrl: './free-checkup.component.html',
  styleUrls: ['./free-checkup.component.css']
})
export class FreeCheckupComponent implements OnInit {  

  id = uid();
  newid = this.id.replace('function now() { [native code] }','');
  placeholder;
  // key:string;

  idgetter(){
    if (!confirm(`Clicking "Ok" will generate a SecretKey. Please share at reception.`)) return;
    {
      alert(`This is your secret code - ${this.newid}`);
      localStorage.setItem("key", this.newid);
      this.placeholder = "This is your Secretkey - "
      this.key = localStorage.getItem('key');
    }
  }
  key = localStorage.getItem('key');
  

  constructor() {
    // console.log(this.id);
   }

  ngOnInit(): void {
  }
   
}

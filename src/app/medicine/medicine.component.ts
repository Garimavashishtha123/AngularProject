import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { CartService } from '../cart.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private med : MedicineService, private cart:CartService ) { }

  ngOnInit(): void {
    this.med.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.Price});
      });
      console.log(this.productList)
    });

  }
  addtocart(item: any){
    this.cart.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import  { ProductDataService } from '../product-data.service'
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  dataListing:Array<Object>=[];
  constructor(private dataservice:ProductDataService) { }

  ngOnInit(): void 
  {
    this.dataservice.getAllProducts().subscribe((data)=>
    {
      this.dataListing=data;
      console.log(this.dataListing);
    })
  }
  
}

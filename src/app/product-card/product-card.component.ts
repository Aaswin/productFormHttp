import { Component, Input, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productData={};
 
  constructor(private productDataService:ProductDataService) {  }
  ngOnInit(): void {
  }
  deleteObj(id:number)
  {
    this.productDataService.deleteProductById(id);
  }

}

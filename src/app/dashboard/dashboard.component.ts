import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDataList:Array<Object>=[];
  productDataList:Array<Object>=[];
  constructor(private productDataService:ProductDataService,private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.userDataList=this.userDataService.getAllUsers();
    this.productDataService.getAllProducts().subscribe((data)=>
    {
      this.productDataList=data;
      console.log(this.productDataList);
    })
  }

}

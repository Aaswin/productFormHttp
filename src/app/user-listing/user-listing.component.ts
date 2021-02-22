import { Component, OnInit } from '@angular/core';
import  { UserDataService } from '../user-data.service'

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  userListing:Array<Object>=[];
  constructor(private datauserservice:UserDataService) { }

  ngOnInit(): void 
  {
    this.userListing=this.datauserservice.getAllUsers();
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObject:any={};
  constructor(private activateduserRoute:ActivatedRoute,private datauserService:UserDataService) { }

  ngOnInit(): void {
    console.log(this.activateduserRoute.snapshot.params.id);
    this.userObject=this.datauserService.getUsersById(this.activateduserRoute.snapshot.params.id);
  
  }
  userDelete(id:any)
  {
    this.datauserService.deleteUserById(id);
  }

}

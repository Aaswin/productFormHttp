
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user_data=[
    {
      id:1,
      name:"user1",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"

    },
    {
      id:2,
      name:"user2",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    },
    {
      id:3,
      name:"user3",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    },
    {
      id:4,
      name:"user4",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    }
  ]

  constructor() { }
  getAllUsers():Array<Object>
  {
    return this.user_data;
  }
  getUsersById(id:number):any
  {
    return  this.user_data.find(p=>p.id==id);
  }
  addUser(dataObj:any)
  {
    dataObj.id=this.user_data.length + 1;
    dataObj.image="http://placehold.it/20*20";
    this.user_data.push(dataObj);
  }
  deleteUserById(i:number)
  {
    const j=this.user_data.findIndex(x=>x.id==i);
    this.user_data.splice(j,1);
  }
  updateUser(id:any,dataObj:any)
  {
    let userIndex=this.user_data.find(obj=>obj.id==id);
    dataObj.id=userIndex;
    dataObj.image="http://placehold.it/20*20";
    this.user_data.push(dataObj);
  }
}

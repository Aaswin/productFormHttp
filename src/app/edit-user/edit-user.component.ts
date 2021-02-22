import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userFormGroup:any={};
  constructor(private activatedRoute:ActivatedRoute ,private fb:FormBuilder,private userDataService:UserDataService,private router:Router) { }
  ngOnInit(): void 
  {
    let currentId=this.activatedRoute.snapshot.params.id;
    let currentUser=this.userDataService.getUsersById(currentId);
    this.userFormGroup=this.fb.group(
        {
          name:this.fb.control(currentUser.name,[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
          age:this.fb.control(currentUser.age,Validators.required),
          email:this.fb.control(currentUser.email,Validators.required),
          password:this.fb.control(currentUser.password,Validators.required)
        })
  }
  submitUserForm()
  {
    if(this.userFormGroup.valid)
    {
      console.log(this.userFormGroup.value);
      this.userDataService.updateUser(this.activatedRoute.snapshot.params.id,this.userFormGroup.value);
      this.userFormGroup.reset();
      this.router.navigate(['/userlist']);
    }
    else
    {
      this.validateAllFormFields(this.userFormGroup);
    }
  }
  validateAllFormFields(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>
      {
        const control=formGroup.get(field);
        if(control instanceof FormControl )
        {
          control.markAsTouched({onlySelf:true});
        }
        else if(control instanceof FormGroup)
        {
          this.validateAllFormFields(control);
        }
      })
  }
}

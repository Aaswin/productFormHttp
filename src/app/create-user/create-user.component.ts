import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit 
{
  userFormGroup:any={};
  constructor(private activatedRoute:ActivatedRoute ,private fb:FormBuilder,private userDataService:UserDataService,private router:Router) { }
  ngOnInit(): void 
  {
    this.userFormGroup=this.fb.group(
        {
          name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
          age:this.fb.control('',Validators.required),
          email:this.fb.control('',Validators.required),
          password:this.fb.control('',Validators.required),
          cpassword:this.fb.control('',Validators.required)
        })

    this.userFormGroup.get('cpassword').valueChanges.subscribe((data:any)=>
    {
          if(this.userFormGroup.get('password').value==data)
          {
            console.log(data);
          }
          else
          {
            this.userFormGroup.get('cpassword').setErrors({confirm:false});
            console.log(data);
          }
    });
  }
  submitUserForm()
  {
    if(this.userFormGroup.valid)
    {
      console.log(this.userFormGroup.value);
      this.userDataService.addUser(this.userFormGroup.value);
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


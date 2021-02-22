import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productFormGroup:any;
  constructor(private fb:FormBuilder,private productDataService:ProductDataService,private router:Router) { }

  ngOnInit(): void 
  {
    this.productFormGroup=this.fb.group(
      {
        name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        price:this.fb.control('',Validators.required),
        description:this.fb.control('',Validators.required)
  
      })
  }
  submitForm()
  {
    if(this.productFormGroup.valid)
    {
      console.log(this.productFormGroup.value);
      this.productDataService.addProduct(this.productFormGroup.value).subscribe((data)=>
      {
        this.productFormGroup.reset();
        this.router.navigate(['productlist']);
      });
    }
    else
    {
      this.validateAllFormFields(this.productFormGroup);
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

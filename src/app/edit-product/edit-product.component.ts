import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productFormGroup:any={};
  currentProduct;
  constructor(private activatedRoute:ActivatedRoute ,private fb:FormBuilder,private productDataService:ProductDataService,private router:Router) { }
  ngOnInit(): void 
  {
    let currentiD=this.activatedRoute.snapshot.params.id;
    this.productDataService.getProductById(currentiD).subscribe((data)=>
    {
      this.currentProduct=data;
      console.log(this.currentProduct);
    })
    this.productFormGroup=this.fb.group(
        {
          name:this.fb.control(this.currentProduct.name,[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
          price:this.fb.control(this.currentProduct.price,Validators.required),
          description:this.fb.control(this.currentProduct.description,Validators.required)
        })
  }
  submitForm()
  {
    if(this.productFormGroup.valid)
    {
      console.log(this.productFormGroup.value);
      this.productDataService.updateProduct(this.activatedRoute.snapshot.params.id,this.productFormGroup.value);
      this.productFormGroup.reset();
      this.router.navigate(['/productlist']);
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

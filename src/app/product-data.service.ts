import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Array<Object>>
  {
    return this.http.get<Array<Object>>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products');
  }
  getProductById(id:number):Observable<object>
  {
    return  this.http.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`);
  }
  addProduct(dataObj:any)
  {
    // dataObj.id=this.data.length + 1;
    // dataObj.image="http://placehold.it/20*20";
    // this.data.push(dataObj);
    // console.log(dataObj);
    return this.http.post('https://5cdd0a92b22718001417c19d.mockapi.io/api/products',dataObj);
  }
  deleteProductById(i:any)
  {
   
    // const j=this.data.findIndex(x=>x.id==i);
    // console.log(i,j,this.data[j]);
    // this.data.splice(j,1);
  }
  updateProduct(id:number,dataObj:any)
  {
    return this.http.post(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products${id}`,dataObj);
    // let ind=this.data.findIndex((obj)=>
    // {
    //   return obj.id==id;
    // })
    // dataObj.id=id;
    // dataObj.image="http://placehold.it/20*20";
    // this.data[ind]=dataObj;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HeadevComponent } from './headev/headev.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    HeadevComponent,
    ProductListingComponent,
    ProductCardComponent,
    CreateProductComponent,
    UserListingComponent,
    UserCardComponent,
    CreateUserComponent,
    UserComponent,
    DashboardComponent,
    EditProductComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

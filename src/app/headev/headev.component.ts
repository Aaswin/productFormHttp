import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headev',
  templateUrl: './headev.component.html',
  styleUrls: ['./headev.component.css']
})
export class HeadevComponent implements OnInit {
  isMenuOpen=true;
  constructor()
  {


  }
  openMenu()
  {
    this.isMenuOpen=!this.isMenuOpen
  }

  ngOnInit(): void {
  }

}
//Databinding
//propery Databinding--passing ts to hmtl
//event Databinding--passing data from html to ts
//two way Databinding---passing between html and css


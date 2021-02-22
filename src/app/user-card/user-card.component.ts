import { Input,Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userData={};
  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
  }
  deleteObj(id:number)
  {
    this.userDataService.deleteUserById(id);
  }

}

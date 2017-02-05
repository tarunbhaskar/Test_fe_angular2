import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
private _users =[];

private url = 'http://mocker.egen.io/users';


  constructor(public userService: UserServiceService) { 

  	
  }

  ngOnInit() {

   this.userService.fetchGet(this.url)
            .subscribe(resp => {this._users = resp;  
          }
        )

 

 
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any[] = []
  constructor( private _userService: UserService ) { }

  ngOnInit(): void {
    console.log("Before loading users:", this.userList );
    let observable = this._userService.getUsers();

    observable.subscribe( 
      (data:any) => {
        this.userList = data;
      },
      (error:any) => {
        console.log("My own error message", error );
      });

    console.log("After loading the users:", this.userList );
  }

}

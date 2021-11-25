import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'The User Application';
  constructor( private _userService: UserService ){ }

  ngOnInit(){
    console.log( "This is logging from the APP!!", this._userService.userList );
  }
}


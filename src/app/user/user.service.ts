import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: any[] = [{
    firstName : "Alex",
    lastName : "Miller",
    developer : true,
    hobbies : ['program', 'read']
  },
  {
    firstName : "Julie",
    lastName : "Sanchez",
    developer : false,
    hobbies : ['program', 'sing', 'dance']
  },
  {
    firstName : "Roger",
    lastName : "Gomez",
    developer : true,
    hobbies : ['program']
  }]
  constructor( private _http:HttpClient ) { }

  getUsers(){
    return this._http.get( 'http://localhost:8181/api/users/' );
  }

}

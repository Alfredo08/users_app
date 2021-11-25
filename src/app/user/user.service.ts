import { Injectable } from '@angular/core';

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
  constructor() { }
}

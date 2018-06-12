import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
      username: "Jan",
      password: "curcon",
      rol:{
        href: "GET URI"
      }
  }

  constructor() { }

  ngOnInit() {
  }

}

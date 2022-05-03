import { Component, OnInit } from '@angular/core';
import { UserBehaviorService } from '../user-behavior.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public userService: UserBehaviorService
  ) { }

  ngOnInit() {
    console.log(this.userService.items)
  }

}
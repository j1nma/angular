import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  setToActive(id: number) {
    this.usersService.setToActive(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { user } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:user = {
    UserId: 0,
    Id: 0,
    hospital_id: 0,
    password: '',
    UserName: '',
    Token: '',
    roles: [],
    knownAs: '',
    age: 0,
    gender: '',
    created: new Date,
    image: '',
    lastActive: new Date,
    PhotoUrl: '',
    city: '',
    mobile: '',
    email: '',
    country: '',
    worked_in: '',
    active: false,
    ltk: false,
    paidTill: new Date
  };

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  login(){}

  logOut(){}

}

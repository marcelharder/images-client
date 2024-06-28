import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { slideModel } from '../_models/slideModel';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
@Input()

t?: string;
slide: slideModel = {
  Id: '',
  ImageUrl: '',
  YearTaken: '',
  Location: '',
  Familie: '',
  Category: 0,
  Quality: '',
  Series: '',
  Spare1: '',
  Spare2: '',
  Spare3: ''
};
  constructor(private authService: AccountService) { }

  ngOnInit() {
  }


}

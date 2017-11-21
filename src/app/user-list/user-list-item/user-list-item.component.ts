import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: string;
  @Input() gender: string;
  @Input() friends: string;
  constructor() { }

  ngOnInit() {
  }

}

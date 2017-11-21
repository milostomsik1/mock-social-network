import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friend-list-item',
  templateUrl: './friend-list-item.component.html',
  styleUrls: ['./friend-list-item.component.scss']
})
export class FriendListItemComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() friends: string;

  constructor() { }

  ngOnInit() {
  }

}

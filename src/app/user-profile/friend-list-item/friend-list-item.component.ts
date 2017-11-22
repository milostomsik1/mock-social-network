import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-list-item',
  templateUrl: './friend-list-item.component.html',
  styleUrls: ['./friend-list-item.component.scss']
})
export class FriendListItemComponent {
  @Input() id: string;
  @Input() firstName: string;
  @Input() surname: string;
  @Input() friends: string;

  constructor() {}
}

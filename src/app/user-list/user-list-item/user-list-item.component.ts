import { User } from './../../_interfaces/user/user';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input() user: User;

  constructor(
    private router: Router
  ) {}

  public displayProfile(): void {
    this.router.navigate(['/', this.user.id]);
  }
}

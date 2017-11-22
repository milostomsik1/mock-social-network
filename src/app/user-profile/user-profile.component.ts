import { UsersService } from './../_services/users/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private firstName: string;
  private surname: string;
  private age: number;
  private gender: string;
  private friends: number[];

  private friendsList: object[] = [];
  private friendsOfFriends: object[] = [];
  private suggestedFriends: object[] = [];

  private routeId;
  private routeParamsSubscription: Subscription;
  private usersSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) {}


  private findUser(users: object[]): object {
    const USER = users.filter(user => {
      return user['id'] == this.routeId;
    });
    return USER[0];
  }

  private setUserData(users: object[]): void {
    const USER = this.findUser(users);

    this.firstName = USER['firstName'];
    this.surname = USER['surname'];
    this.age = USER['age'];
    this.gender = USER['gender'];
    this.friends = USER['friends'];
  }

  private getFriends(users: object[]): object[] {
    return users.filter(user => {
      return this.friends.includes(user['id']);
    });
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.routeId = params.id;
      this.usersSubscription = this.users.data$
      .subscribe(users => {
        if (this.routeId && users.length > 0) {
          this.setUserData(users);
          this.friendsList = this.getFriends(users);
          console.log('friends list', this.getFriends(users));
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}

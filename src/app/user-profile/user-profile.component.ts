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

  private _users: object[];

  private friendsList: object[] = [];
  private friendsOfFriends: object[] = [];
  private selectedFriend: string;
  private suggestedFriends: object[] = [];

  private routeId;
  private routeParamsSubscription: Subscription;
  private usersSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) {}


  private getUserById(id): object {
    const USER = this._users.filter(user => {
      return user['id'] == id;
    });
    return USER[0];
  }

  private setUserData(): void {
    const USER = this.getUserById(this.routeId);

    this.firstName = USER['firstName'];
    this.surname = USER['surname'];
    this.age = USER['age'];
    this.gender = USER['gender'];
    this.friends = USER['friends'];
  }

  private getFriends(friendIds: number []): object[] {
    return this._users.filter(user => {
      return friendIds.includes(user['id']);
    });
  }

  private getFriendsOfFriends(userId: number): object[] {
    const USER = this.getUserById(userId);

    this.friendsOfFriends = this.getFriends(USER['friends']);
    this.friendsOfFriends = this.friendsOfFriends.filter(friend => {
      return !this.friends.includes(friend['id']);
    });
    this.selectedFriend = USER['firstName'];
    return this.getFriends(USER['friends']);
  }

  private getSuggestedFriends(): void {
    // Suggested friends: people in the group
    // who know 2 or more direct friends of the
    // chosen user but are not directly connected
    // to the chosen user;
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.routeId = params.id;
      this.usersSubscription = this.users.data$
      .subscribe(users => {
        this._users = users;
        if (this.routeId && users.length > 0) {
          this.setUserData();
          this.friendsList = this.getFriends(this.friends);
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}

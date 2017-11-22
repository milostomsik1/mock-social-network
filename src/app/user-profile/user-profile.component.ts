import { User } from './../_interfaces/user/user';
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

  private _users: User[];

  private friendsList: User[] = [];
  private friendsOfFriends: User[] = [];
  private selectedFriend: string;
  private suggestedFriends: User[] = [];

  private userId;
  private routeParamsSubscription: Subscription;
  private usersSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) {}


  private getUserById(id): User {
    const USER = this._users.filter(user => {
      return user['id'] === id;
    });
    return USER[0];
  }

  private setUserData(): void {
    const USER = this.getUserById(this.userId);

    this.firstName = USER['firstName'];
    this.surname = USER['surname'];
    this.age = USER['age'];
    this.gender = USER['gender'];
    this.friends = USER['friends'];
  }

  private getFriends(friendIds: number []): User[] {
    return this._users.filter(user => {
      return friendIds.includes(user['id']);
    });
  }

  private getFriendsOfFriends(userId: number): User[] {
    const USER = this.getUserById(userId);

    this.friendsOfFriends = this.getFriends(USER['friends']);
    this.friendsOfFriends = this.friendsOfFriends.filter(friend => {
      return !this.friends.includes(friend['id']);
    });
    this.selectedFriend = USER['firstName'];
    return this.getFriends(USER['friends']);
  }

  private getSuggestedFriends(): User[] {
    let suggestedFriends = this._users.slice(0);
    const USER_ID = this.userId;
    const USER_AND_FRIENDS = this.friends.concat(USER_ID);

    // -- exclude user and his friends from the list of potential suggested friends
    suggestedFriends = suggestedFriends.filter(friend => {
      return !USER_AND_FRIENDS.includes(friend['id']);
    });

    // -- for all suggested friends, if a friend of suggested friend is users direct friend increase counter
    // -- if there are two common friends keep the entry, otherwise reject
    // -- simplified, checks if potential friend knows at least 2 direct friends
    suggestedFriends = suggestedFriends.filter(suggestedFriend => {
      let commonFriends = 0;

      suggestedFriend['friends'].forEach(friend => {
        if (this.friends.includes(friend)) {
          commonFriends++;
        }
      });
      return commonFriends >= 2 ? true : false;
    });
    return suggestedFriends;
  }

  private resetFriendSelection(): void {
    this.friendsOfFriends = null;
    this.selectedFriend = null;
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.userId = parseInt(params.id, 10);
      this.resetFriendSelection();

      this.usersSubscription = this.users.data$.subscribe(users => {
        this._users = users;
        if (this.userId && users.length > 0) {
          this.setUserData();
          this.friendsList = this.getFriends(this.friends);
          this.suggestedFriends = this.getSuggestedFriends();
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}

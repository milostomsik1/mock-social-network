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

  private routeId;
  private routeParamsSubscription: Subscription;
  private usersSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) {}

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.routeId = params.id;
      this.usersSubscription = this.users.data$
      .subscribe(users => {
        if (this.routeId && users.length > 0) {
          const USER = users.filter(user => {
            return user['id'] == this.routeId;
          });

          this.firstName = USER[0]['firstName'];
          this.surname = USER[0]['surname'];
          this.age = USER[0]['age'];
          this.gender = USER[0]['gender'];
          this.friends = USER[0]['friends'];
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}

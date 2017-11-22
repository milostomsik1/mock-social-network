import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private name = 'test';
  private gender = 'Male';
  private age = '23';

  private routeId;
  private routeParamsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.routeId = params.id;

      console.log(params.id);
    });
  }

}

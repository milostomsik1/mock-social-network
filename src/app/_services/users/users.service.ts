import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  private _users = new BehaviorSubject([]);
  public users$ = this._users.asObservable();

  constructor(
    private http: Http
  ) {
    this.getUsers();
  }

  private getUsers(): void {
    this.http.get('./../assets/data.json')
    .subscribe(
      users => {
        // -- fake BE delay
        setTimeout(() => {
          this._users.next(users.json());
          console.log(users.json());
        }, 1000);
      },
      err => {
        console.log(err);
        alert(JSON.stringify(err, null, 2));
      }
    );
  }
}

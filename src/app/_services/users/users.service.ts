import { User } from './../../_interfaces/user/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  private _data = new BehaviorSubject(<User[]>[]);
  public data$: Observable<User[]> = this._data.asObservable();

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
          this._data.next(users.json());
        }, 1000);
      },
      err => {
        console.log(err);
        alert(JSON.stringify(err, null, 2));
      }
    );
  }
}

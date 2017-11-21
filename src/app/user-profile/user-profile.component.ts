import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private name = 'test';
  private gender = 'Male';
  private age = '23';

  private users = [
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 1,
      firstName: 'Paul',
      surname: 'Crowe',
      age: 28,
      gender: 'male',
      friends: [
        2
      ]
    },
    {
      id: 2,
      firstName: 'Rob',
      surname: 'Fitz',
      age: 23,
      gender: 'male',
      friends: [
        1,
        3
      ]
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

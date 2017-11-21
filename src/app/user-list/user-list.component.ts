import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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

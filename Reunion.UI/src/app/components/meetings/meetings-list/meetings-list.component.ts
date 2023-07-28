import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/meeting.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {
  
  members: User[] = [
    {
      id: "user",
      name: "Riyaz",
      email: "lol@gmail.com",
      password: "pass"
    },
    {
      id: "user1",
      name: "Riyaz1",
      email: "lol1@gmail.com",
      password: "pass1"
    },
    {
      id: "user2",
      name: "Riyaz2",
      email: "lol2@gmail.com",
      password: "pass2"
    },
    {
      id: "user3",
      name: "Riyaz3",
      email: "lol3@gmail.com",
      password: "pass3"
    }
  ]

  meetings: Meeting[] = [
    {
      id: "lol",
      creator: this.members[0],
      date: new Date(20230910),
      theme: "firstMeeting",
      members: [this.members[1], this.members[2]]
    },
    {
      id: "lol1",
      creator: this.members[1],
      date: new Date(20230911),
      theme: "firstMeeting1",
      members: [this.members[0], this.members[2]]
    },
    {
      id: "lol2",
      creator: this.members[2],
      date: new Date(20230912),
      theme: "firstMeeting2",
      members: [this.members[0], this.members[1]]
    },
    {
      id: "lol",
      creator: this.members[3],
      date: new Date(20230913),
      theme: "firstMeeting3",
      members: [this.members[2], this.members[1]]
    },
    {
      id: "lol",
      creator: this.members[2],
      date: new Date(20230915),
      theme: "firstMeeting",
      members: [this.members[3], this.members[0]]
    }
  ]

  //meetings: Meeting[] = [];

  constructor() {}

  ngOnInit(): void {

  }

}

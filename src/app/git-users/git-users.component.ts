import { Component, OnInit } from '@angular/core';
import {ServiceGitUsers} from "../Service-Delegate/ServiceGitUsers";
import {ServiceGitUsersDelegate} from "../Service-Delegate/ServiceGitUsersDelegate";

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css'],
  providers: [ServiceGitUsers]
})
export class GitUsersComponent implements OnInit, ServiceGitUsersDelegate {

  constructor(public serviceGitUsers: ServiceGitUsers) { }

  ngOnInit() {
    // Give the current context to the serviceDelegate
    this.serviceGitUsers.serviceGitUsersDelegate = this;
  }


  successOperation(status: number): Function {
    console.log("success operation : we recieved the following status: " + status);
    return null;
  }

  failedOperation(status: number): Function {
    console.log("failed operation : we recieved the followign status: "+ status);
    return null;
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/entities/user';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  title: string = "List of users";
  users: User[] = [];
  selectedUser: User | undefined;
  selectedUserLogin: string | undefined;
  selectedUserId: number | undefined;
  action = 'add';
  editedUser = new User("", "", "", new Date(), "", "", 0);
  usersJson: string | undefined;
  comunicationState: boolean | undefined;

  constructor(private usersService: UsersService) {
  }


  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {

    this.usersService.getUsersFromServer().subscribe(usersX => {
      this.users = usersX;
      this.usersJson = JSON.stringify(this.users);
      this.comunicationState = true;
    },
      error => {
        console.log("Nastala chyba" + JSON.stringify(error))
        this.comunicationState = false;
      });

  }

  selectUser(user: User) {
    this.selectedUserLogin = user.login;
    this.selectedUserId = user.id;
    this.selectedUser = user;
  }



  editedUserSaved(user: User) {
    if (this.action === "delete") {

      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.selectedUser?.id) {
          this.users.splice(i, 1);
          break;
        }
      }

      this.usersService.deleteUser(user).subscribe();
      this.selectedUser = undefined;
      this.selectedUserId = undefined;
      this.selectedUserLogin = undefined;

    } else if (this.action === "add") {
      this.users.push(user);
      this.usersService.saveUser(user).subscribe();

    } else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.selectedUser?.id) {
          this.users[i] = user;
          this.usersService.saveUser(user).subscribe();
          this.selectedUser = undefined;
          this.selectedUserId = undefined;
          this.selectedUserLogin = undefined;
          break;
        }
      }
    }
  }

  addUserButtonClicked() {
    this.action = 'add';
    this.editedUser = new User("", "", "", new Date(), "", "");

  }

  deleteButtonClicked(user?: User) {
    this.action = 'delete';
    if (user) {
      this.editedUser = Object.assign(user);
    }

  }


  editUserClicked(user?: User) {
    this.action = 'edit';
    if (user) {
      this.editedUser = Object.assign(user);
    }
  }
}

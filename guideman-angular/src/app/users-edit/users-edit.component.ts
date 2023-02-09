import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/entities/user';

declare var $:any;

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})

export class UsersEditComponent implements OnChanges {
  @Input() user: User = new User("", "", "",new Date(), "","",0,);
  @Input() actionWithUser = "...";
  @Output() savedUser = new EventEmitter<User>();


  constructor() { }

  ngOnChanges() {
  }


  get actualUser(): string {
    return JSON.stringify(this.user);
  }

  get title():string {
    if (this.actionWithUser == "add") {
      return "adding user"
    } else {
      return "editing user"
    }
  }

  onSubmit() {
    this.savedUser.emit(this.user);
    $('.modal.in').modal('hide');
  }

}

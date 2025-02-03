import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    DUMMY_USERS.find(user => user.id === this.user.id)
    this.select.emit(this.user.id);
    }

}

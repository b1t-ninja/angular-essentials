import {Component, computed, input, output} from '@angular/core'
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>()
  select = output<string>()

  imagePath = computed(() => `assets/users/${this.user().avatar}`)

  // emitting the id of the user
  onSelectUser() {
    this.select.emit(this.user().id)
  }
}

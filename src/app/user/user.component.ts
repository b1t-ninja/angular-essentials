import {Component, computed, input, output} from '@angular/core'

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

export interface User {
  id: string
  avatar: string
  name: string
}

import {Component, computed, input, output} from '@angular/core'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>()
  avatar = input.required<string>()
  name = input.required<string>()
  select = output<string>()

  imagePath = computed(() => `assets/users/${this.avatar()}`)

  // emitting the id of the user
  onSelectUser() {
    this.select.emit(this.id())
  }
}

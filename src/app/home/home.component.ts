import { Component } from '@angular/core';
import { HeaderComponent } from '../utility/header/header.component';
import { UserListComponent } from '../user/user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UserListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

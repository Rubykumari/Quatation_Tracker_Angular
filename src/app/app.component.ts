import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSrv = inject(UserService)
  router = inject(Router);
  constructor() {}

  onLogout(){
    sessionStorage.removeItem('RfqUser');
    this.userSrv.loggedUserData = undefined;
  }
}

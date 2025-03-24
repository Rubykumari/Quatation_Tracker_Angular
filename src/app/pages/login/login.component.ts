import { NgStyle } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   isLoginFormVisible = signal<boolean>(true);

   toggleForm() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
   }
}

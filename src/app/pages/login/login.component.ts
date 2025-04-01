import { NgStyle } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { UserService } from '../../service/user.service';
import { IApiResponse, Login, Register } from '../../model/User';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   isLoginFormVisible = signal<boolean>(true);
   userServ = inject(UserService);
   router = inject(Router);
   registerObj:Register = new Register();
   loginObj:Login = new Login();
   toggleForm() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
   }
   setRole(role: string){
   this.registerObj.role = role;
   }
   onRegister(){
    return this.userServ.onRegister(this.registerObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Registration Successfully Created");
        this.registerObj = new Register();
      }
      else{
        alert(res.message);
      }
    })
   }
   onLogin(){
    return this.userServ.onLoginSrv(this.loginObj).subscribe((res:IApiResponse)=>{
    if(res.result){
      sessionStorage.setItem('RfqUser', JSON.stringify(res.data));
      this.userServ.loggedUser();
      this.router.navigateByUrl('/home');
    }
    })
   }
}

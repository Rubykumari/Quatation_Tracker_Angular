import { NgStyle } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { UserService } from '../../service/user.service';
import { IApiResponse, Register } from '../../model/User';
import { FormsModule } from '@angular/forms';

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
   registerObj:Register = new Register();
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
    
   }
}

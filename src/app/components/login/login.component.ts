import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  LoginForm!: FormGroup

  constructor(private router: Router, private user: UsersService, private formBuilder:FormBuilder){}

    ngOnInit(): void {
      this.LoginForm= this.formBuilder.group({
        email:[''],
        password:['']
      })
    }
    
  OnLogin(){
    let data={
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }

    this.user.Login(data).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
      this.router.navigate(['/home']);
    })
  }
  
  navigateToSignup(): void {
    this.router.navigate(['/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

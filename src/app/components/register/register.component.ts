import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  RegisterForm!:FormGroup

  constructor(private router: Router,private user:UsersService, private build:FormBuilder) {}

  ngOnInit(): void {
    this.RegisterForm = this.build.group({
      fullname:[''],
      email:[''],
      password: [''],
      contactNumber: ['']
    })
  }

  OnRegister(){
    let data={
      fullName:this.RegisterForm.value.fullname,
      email:this.RegisterForm.value.email,
      password: this.RegisterForm.value.password,
      contactNumber: this.RegisterForm.value.contactNumber
    }
    this.user.register(data).subscribe((result:any)=>{
      console.log(result);
    })
  }
  
  

  navigateToSignup(): void {
    this.router.navigate(['/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

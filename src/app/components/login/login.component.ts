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
    })
  }


  // credentials = { email: '', password: '' };

  // // constructor(private authService: AuthService, private router: Router) {}
  // constructor(private router: Router) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // // login(): void {
  // //   this.authService.login(this.credentials).subscribe(
  // //     response => {
  // //       if (response.isSuccess) {
  // //         localStorage.setItem('token', response.data.token);
  // //         this.router.navigate(['/orders']);
  // //       } else {
  // //         alert(response.message);
  // //       }
  // //     },
  // //     error => {
  // //       console.error(error);
  // //       alert('Login failed. Please try again.');
  // //     }
  // //   );
  // // }
  
  
  navigateToSignup(): void {
    this.router.navigate(['/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

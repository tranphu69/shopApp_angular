import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';
import { LoginDTO } from '../dtos/user/login.dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  phoneNumber: string = '0327407319';
  password: string = '123456aA@';
  roleId: number = 2;

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
  }

  login() {
    const loginData: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
      role_id: this.roleId
    }
        this.userService.login(loginData).subscribe({
      next: (response: any) => {
        debugger;
        //this.router.navigate(['/login']);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        alert(`Cannot register, error: ${error.error}`);
      },
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthResponseData, AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid){
      return;
    }
    let value = authForm.value;
    const email = value.email;
    const password = value.password;

    let authObs : Observable<AuthResponseData>;

    if (this.isLoginMode){
    authObs = this.authService.login(email,password)
    }else {
      authObs = this.authService.signup(email,password)
    }
    authObs.subscribe(data => {
      console.log(data);
      this.router.navigate(['sources']);
    })

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, public _router:Router) { }

  user = {
    userName:'',
    password:''
  }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.authService.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/books'])
        alert("Welcome to digiBook family...")

      }
    )
  }

}

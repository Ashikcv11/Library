import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService, public _router:Router) { }

  title:string="DigiBook.com"

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate([''])
    
  }

}
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';
import { UserModel } from './userModel';
// import { FormBuilder, Validators } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private libraryService:LibraryService,public router:Router) { }


 

  ngOnInit(): void {
  }
  userData = new UserModel("","","","");




  userdata(){
    this.libraryService.userSignup(this.userData);
    console.log("submitted");
    alert("Signup Successfull...");
    this.router.navigate(['/login']);
  }

}

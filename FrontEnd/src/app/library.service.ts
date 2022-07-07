import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './books/bookModel';
import { UserModel } from './signup/userModel';

var books = BookModel;
var usermodel = UserModel;

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  server_address: string = 'api';

  constructor(public http: HttpClient) { }

  userSignup(User:any){
    console.log('service fille got the item');
    // return this.http.post('http://localhost:3000/signup',{'User':User})
    return this.http.post(`${this.server_address}/signup`,{'User':User})
    .subscribe((data)=>{
      console.log(data);
      console.log(User);
      alert("signed up successfully....")
    })
  }

  getbookdata() {
    // return this.http.get('http://localhost:3000/books');
    return this.http.get(`${this.server_address}/books`);

  }

  addBookData(Book:any){
    console.log('service fille got the item');
    // return this.http.post('http://localhost:3000/add',{'Book':Book})
    return this.http.post(`${this.server_address}/add`,{'Book':Book})
    .subscribe((data)=>{
      console.log(data);
      console.log(Book)
    })

  }

  singleBook(id:any){
    // return this.http.get('http://localhost:3000/Abook/'+id);
    return this.http.get(`${this.server_address}/Abook/`+id);


  }

  deleteBookData(id:any){

    // return this.http.delete('http://localhost:3000/remove/'+id)
    return this.http.delete(`${this.server_address}/remove/`+id)


  }

  editBookData(i:any){
    console.log("data send for the updation")
    // return this.http.put('http://localhost:3000/edit',i)
    return this.http.put(`${this.server_address}/edit`,i)
    .subscribe(data =>{console.log(data)})

  }

}

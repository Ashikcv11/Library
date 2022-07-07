import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { AuthService } from '../auth.service';
import { BookModel } from './bookModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books : BookModel[] | any;

  
  constructor(public librarydataservice: LibraryService,public _auth:AuthService, public router:Router) { }

  // public libraryDataService: LibraryService
  ngOnInit(): void {
    this.librarydataservice.getbookdata().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
    })
  }

  deleteBook(id:any){
    this.librarydataservice.deleteBookData(id)
    
    .subscribe(data=>{
      this.books = this.books.filter((p: any) => p !== id);
      localStorage.removeItem('editBookId')
      window.location.reload()

    })
      // this.router.navigate(['/books']);



  }

  editBook(i:any){
    localStorage.setItem("editBookId", i._id.toString());
    this.router.navigate(['update']);

  }

}

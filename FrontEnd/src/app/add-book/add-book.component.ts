import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookModel } from '../books/bookModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  BookModel = new BookModel("","","","");

  constructor(public librarydataservice: LibraryService, public router:Router ) { }



  ngOnInit(): void {
  }

  AddBook()
  {
    this.librarydataservice.addBookData(this.BookModel);
    console.log("data sended");
    alert("Book added successfully...");
    this.router.navigate(['/books']);
    
  }

}

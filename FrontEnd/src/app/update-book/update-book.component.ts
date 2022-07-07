import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  BookData = {
    BookAuth : '',
    BookName : '',
    BookImg : '',
    BookDesc: ''
  }

  constructor(public librarydataservice: LibraryService, public router:Router) { }

  ngOnInit(): void {
    let bookid = localStorage.getItem('editBookId');
    console.log('data got with id');
    this.librarydataservice.singleBook(bookid).subscribe((data)=>{
      this.BookData=JSON.parse(JSON.stringify(data));
    })
  }

  updateBook(){
    this.librarydataservice.editBookData(this.BookData);
    alert("success");
    this.router.navigate(['/books'])


  }

}

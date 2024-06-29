import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fetch-all-books',
  templateUrl: './fetch-all-books.component.html',
  styleUrl: './fetch-all-books.component.scss'
})
export class FetchAllBooksComponent implements OnInit{
  BooksList:any;
  
  constructor(private book:BooksService, private route:Router){}

  ngOnInit(): void {
    this.GetAllBook();
  }

  GetAllBook(){
    this.book.GetAllBooks().subscribe((response:any)=>{
      console.log(response);
      this.BooksList=response.data;
    })
  }

  ViewBook(Book:any){
    this.route.navigate(['/home/book',Book.bookId]);
  }

}

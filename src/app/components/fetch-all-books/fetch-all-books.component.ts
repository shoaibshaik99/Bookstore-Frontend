import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-fetch-all-books',
  templateUrl: './fetch-all-books.component.html',
  styleUrl: './fetch-all-books.component.scss'
})
export class FetchAllBooksComponent implements OnInit{
  BooksList:any;
  constructor(private book:BooksService){}

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
  }

}

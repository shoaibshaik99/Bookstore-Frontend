import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts/carts.service';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit  {
  Cart:any;
  BooksList:any;
  BooksInCart:any;
  constructor(private cart:CartsService, private books:BooksService){}

  ngOnInit(): void {}

  GetAllBook(){
    this.books.GetAllBooks().subscribe((response:any)=>{
      console.log(response);
      this.BooksList=response.data;
    })
  }
}

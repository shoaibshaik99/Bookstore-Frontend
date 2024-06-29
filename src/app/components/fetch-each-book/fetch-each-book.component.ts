import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-fetch-each-book',
  templateUrl: './fetch-each-book.component.html',
  styleUrls: ['./fetch-each-book.component.scss']
})
export class FetchEachBookComponent implements OnInit {
  bookObject: any;
  id!: number;

  constructor(private bookService: BooksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getBook(this.id);
  }

  getBook(id: number): void {
    this.bookService.GetBookById(id).subscribe((response: any) => {
      this.bookObject = response.data;
    });
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  // constructor(private store: Store<{ books: Book[] }>) {
  constructor(private store: Store<AppState>) {
    // ele fez assim, para mim acusa erro
    // this.books$ = store.pipe(select('books'));
    // inicialmente ele não tipou com o AppState, para mostrar que daria erro com o books e não book
    this.books$ = store.select('book');
  }

  handleAddBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  handleRemoveBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }));
  }
}

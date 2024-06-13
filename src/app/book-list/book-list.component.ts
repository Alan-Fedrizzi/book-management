import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../app.state';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  bookForm: FormGroup = new FormGroup({});

  // constructor(private store: Store<{ books: Book[] }>) {
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    // ele fez assim, para mim acusa erro
    // this.books$ = store.pipe(select('books'));
    // inicialmente ele não tipou com o AppState, para mostrar que daria erro com o books e não book
    this.books$ = store.select('book');
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  handleAddBook(id: string, title: string, author: string) {
    console.log(id, title, author);
    this.store.dispatch(AddBook({ id, title, author }));
  }

  onSubmit() {
    if (this.bookForm.invalid) return;
    console.log(this.bookForm.value);
    this.store.dispatch(AddBook(this.bookForm.value));
  }

  handleRemoveBook(id: string) {
    this.store.dispatch(RemoveBook({ id }));
  }
}

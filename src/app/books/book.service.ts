import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

// não vamos usar backend aqui, vamos usar o of para criar Observable

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  addBook(book: Book): Observable<Book> {
    // returna um Observable do book
    // para simular o success
    return of(book);

    // para simular erro:
    // const err = new Error('Error while adding the book');
    // return throwError(() => err);
  }

  removeBook(id: string): Observable<string> {
    return of(id);

    // const err = new Error('Error while removing the book');
    // return throwError(() => err);
  }
}

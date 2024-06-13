import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as bookActions from './book.actions';
import { BookService } from './book.service';

@Injectable()
export class BookEffects {
  // só queremos rodar esse efeito qd faz o dispatch no AddBook
  // o que queremos fazer qd AddBook is dispatched
  // nesse caso, o action que recebemos é o book
  // This is an NgRx Effect that responds to 'AddBook' actions.
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for actions of type 'AddBook'
      ofType(bookActions.AddBook),

      // For each 'AddBook' action, call 'addBook' on the book service.
      // 'mergeMap' allows multiple concurrent 'addBook' calls.
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
          map((book) => bookActions.AddBookSuccess(book)),

          // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  removeBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.RemoveBook),
      mergeMap((action) =>
        this.bookService.removeBook(action.id).pipe(
          map((id) => bookActions.RemoveBookSuccess({ id })),
          catchError((error) => of(bookActions.RemoveBookFailure({ error })))
        )
      )
    )
  );

  // private actions$: Actions é qualquer actions que estiver rodando no app
  // se fazemos o dispatch em alguma action no app, conseguimos pegar aqui
  constructor(private actions$: Actions, private bookService: BookService) {}
}

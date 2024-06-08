import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  // on(AddBook, (state, action) => [...state, action]);
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
  // on(RemoveBook, (state, action) =>
  //   state.filter((book) => book.id !== action.bookId)
  // )
);

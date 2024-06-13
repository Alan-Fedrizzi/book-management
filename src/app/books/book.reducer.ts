import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  AddBookSuccess,
  AddBookFailure,
  RemoveBook,
  RemoveBookSuccess,
  RemoveBookFailure,
} from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  // só vamos retornar o state, pois quem vai fazer o add é o success
  on(AddBook, (state) => state),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),

  on(RemoveBook, (state) => state),
  on(RemoveBookSuccess, (state, { id }) =>
    state.filter((book) => book.id !== id)
  ),
  on(RemoveBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  })

  // funciona sem o Success e o Failure
  // on(AddBook, (state, { id, title, author }) => [
  //   ...state,
  //   { id, title, author },
  // ]),
  // tb funciona:
  // on(AddBook, (state, action) => [...state, action]),
  // on(RemoveBook, (state, { bookId }) =>
  //   state.filter((book) => book.id !== bookId)
  // )
  // tb funciona:
  // on(RemoveBook, (state: Book[], action) =>
  //   state.filter((book) => book.id !== action.bookId)
  // )
  // !funciona sem o Success e o Failure
);

import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Book', props<Book>());

// pode criar o book ou pode dar erro na API
export const AddBookSuccess = createAction(
  '[Book] Add Book Successfully, ',
  props<Book>()
);

export const AddBookFailure = createAction(
  '[Book] Add Book Failure, ',
  props<{ error: any }>()
);

export const RemoveBook = createAction(
  '[Book] Remove Book',
  props<{ id: string }>()
);

export const RemoveBookSuccess = createAction(
  '[Book] Remove Book Successfully, ',
  props<{ id: string }>()
);

export const RemoveBookFailure = createAction(
  '[Book] Remove Book Failure, ',
  props<{ error: any }>()
);

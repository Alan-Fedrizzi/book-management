import { Book } from './models/book';

export interface AppState {
  // é convenção do Ngrx deixar no singular, book e não books, mesmo sendo um array de books
  readonly book: Book[];
}

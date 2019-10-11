import BaseRepository from './BaseRepository';
import Book from '../../models/Book';

export default class BookRepository extends BaseRepository<Book> {
  constructor() {
    super('books');
  }
}

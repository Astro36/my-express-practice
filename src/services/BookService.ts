import BookRepository from '../database/repositories/BookRepository';
import Book from '../models/Book';
import { NonFunctionProperties } from '../types';

export default class BookService {
  bookRepository = new BookRepository();

  create(id: string, title: string, author: string): Book {
    const book = new Book(id, title, author);
    this.bookRepository.create(book.toJSON());
    return book;
  }

  findById(id: string): Book | null {
    const data = this.bookRepository.findById(id);
    if (data) {
      const book = Book.fromData(data);
      return book;
    }
    return null;
  }

  getAll(): Array<Book> {
    const data = this.bookRepository.getAll();
    const books = data.map(Book.fromData);
    return books;
  }

  update(id: string, newData: Partial<NonFunctionProperties<Book>>): void {
    const data = this.bookRepository.findById(id);
    if (data) {
      const book = Book.fromData(data);
      Object.assign(book, newData);
      this.bookRepository.update(id, book.toJSON());
    }
  }

  delete(id: string): void {
    this.bookRepository.delete(id);
  }
}

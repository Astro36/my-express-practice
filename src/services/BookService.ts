import BookRepository from '../database/repositories/BookRepository';
import Book from '../models/Book';
import { NonFunctionProperties } from '../types';

export default class BookService {
  bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  create(id: number, title: string, author: string): Book {
    const book = new Book(id, title, author);
    this.bookRepository.create(book.toJSON());
    return book;
  }

  findById(id: number): Book {
    const book = Book.fromData(this.bookRepository.findById(id));
    return book;
  }

  getAll(): Array<Book> {
    const books = this.bookRepository.getAll();
    return books.map(Book.fromData);
  }

  update(id: number, data: Partial<NonFunctionProperties<Book>>): Book {
    const book = Book.fromData(this.bookRepository.findById(id));
    book.title = data.title || book.title;
    book.author = data.author || book.author;
    this.bookRepository.update(id, book.toJSON());
    return book;
  }

  delete(id: number): void {
    console.log(this.bookRepository.delete(id));
  }
}

import { Component, OnInit } from '@angular/core';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
	selector: 'app-admin-books',
	templateUrl: './admin-books.component.html',
	styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent implements OnInit {
	faPlus = faPlus;
	faTrash = faTrash;
	faEdit = faEdit;
	books: Book[] = [];
	
	constructor(private bookService: BookService) {}

	ngOnInit() {
		this.loadData();
	}

	async loadData() {
		const books: Book[] = await this.bookService.getBooks().toPromise();
		this.books = books;
	}

	async deleteBook(id: number, i: number) {
		const a = await this.bookService.deleteBook(id);
		console.log('a', a);
		
		this.bookService.deleteBook(id).subscribe(() => {
			console.log('book deleted...');
			this.books.splice(i, 1);
			// this.router.navigateByUrl('/login');
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
	selector: 'app-admin-book',
	templateUrl: './admin-book.component.html',
	styleUrls: ['./admin-book.component.scss'],
})
export class AdminBookComponent implements OnInit {
	insert: boolean = false;
	book: Book = {
		title: '',
		author: '',
		price: 0,
		reviews: 0,
		rating: 0,
	};
	constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			const { id } = params;
			if (id) {
				this.insert = false;
				this.bookService.getBookById(parseInt(id)).subscribe(book => {
					this.book = book;
				});
			} else {
				this.insert = true;
			}
		});
	}

	createBook() {
		this.bookService.createBook(this.book).subscribe((book: Book) => {
			console.log('book inserted...', book);
			this.router.navigate(['admin']);
		});
	}

	editBook() {
		this.bookService.updateBook(this.book).subscribe(() => {
			console.log('book updated...');
			this.router.navigate(['admin']);
		});
	}
}

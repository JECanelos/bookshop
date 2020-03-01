import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';

@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
	quantity: number = 0;
	book$: Observable<Book>;

	constructor(private route: ActivatedRoute, private bookService: BookService) {}

	ngOnInit() {
		// const { id } = this.route.snapshot.params; //{{ id: '1' }}
		// this.book$ = this.bookService.getBookById(parseInt(id));

		// this.route.snapshot.paramMap; // get(name), has(name), keys()

		this.route.params.subscribe(params => {
			const { id } = params;
			this.book$ = this.bookService.getBookById(parseInt(id));
		});
	}

	decrementQty() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	}

	incrementQty() {
		this.quantity++;
	}
}

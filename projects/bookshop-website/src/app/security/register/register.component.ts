import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	user: User = {
		email: '',
		password: '',
	};

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	register(form: NgForm) {
		console.log('register...');
		console.log('form.value', form.value);
		console.log('user', this.user);
		if (form.valid) {
			console.log('executing service...', this.user);
			this.authService.register(this.user).subscribe((user: User) => {
				console.log('service executed...', user);
				this.router.navigate(['login']);
				// this.router.navigateByUrl('/login');
			});
		}
	}
}

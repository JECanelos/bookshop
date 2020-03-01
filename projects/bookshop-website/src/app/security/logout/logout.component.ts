import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserProfile } from '../../models/user-profile';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
	userProfile: UserProfile;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {
		this.authService.getCurrentUserProfile().subscribe(userProfile => {
			this.userProfile = userProfile;
		});
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['home']);
	}
}

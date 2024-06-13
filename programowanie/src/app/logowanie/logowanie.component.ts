import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  logowanie() {
    if (this.authService.login(this.formData.username, this.formData.password)) {
      console.log('Zalogowano pomyślnie');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}

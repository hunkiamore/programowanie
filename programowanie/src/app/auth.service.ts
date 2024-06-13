import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login(username: string, password: string): boolean {
    if (username === 'przykladowyUzytkownik' && password === 'przykladoweHaslo') {
      this._isLoggedIn = true;
      localStorage.setItem('userToken', 'dummy-token');
      return true;
    } else {
      this._isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this._isLoggedIn = false;
    localStorage.removeItem('userToken');
  }

  checkLoginStatus(): void {
    this._isLoggedIn = !!localStorage.getItem('userToken');
  }
}

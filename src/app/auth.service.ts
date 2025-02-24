// myproject/auth.service.ts
import { Injectable } from '@angular/core';
import { loadZone } from 'zone.js/lib/zone';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = [];
  private loggedInUser: any = null;

  register(user: any) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );
    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getLoggedInUser() {
    console.log(localStorage.getItem('loggedInUser'));
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }
}

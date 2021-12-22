import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

export interface LoginForm {
  email: string;
  password: string;
};

export interface User {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  role?: string;
};

export const JWT_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(loginForm: LoginForm) {
    return this.http.post<any>('backend/users/login', { email: loginForm.email, password: loginForm.password }).pipe(
      map((token) => {
        console.log("token")
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      })
    )
  }
  
  register(user: User) {
    return this.http.post<any>('backend/users/', user).pipe(
      map(user => user)
    )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    if(token) return !this.jwtHelper.isTokenExpired(token);
    return false;
  }

  getUserId(): number {
    let jwt: string | null = localStorage.getItem(JWT_NAME);
    if (jwt) {
      let decoded: number = this.jwtHelper.decodeToken(jwt).user.id;
      return decoded;
    }
    return -1;
  }
}

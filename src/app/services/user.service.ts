import { User } from '../model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) {}
  signUp(data: any) {
    return this.http.post<User>(this.baseUrl, data);
  }
}

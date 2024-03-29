import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=1`);
  }

  searchUsersById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getUsersByPage(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}
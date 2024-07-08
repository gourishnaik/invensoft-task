import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService  {
  private Url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addBook(data: any): Observable<any> {
    return this.http.post(`${this.Url}/studentdata`, data);
  }

  getBooksData(): Observable<any> {
    return this.http.get(`${this.Url}/studentdata`);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/studentdata/${id}`);
  }
}
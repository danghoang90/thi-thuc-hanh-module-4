import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/books')
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + '/books',data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(API_URL + '/books/' +id);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/books/${id}`);
  }

  update(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${API_URL}/books/${id}`, book);
  }
}

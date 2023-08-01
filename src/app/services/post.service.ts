import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private jsonApi = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.jsonApi);
  }

  getIdPost(id: number) {
    return this.http.get<any>(`${this.jsonApi}/${id}`);
  }

  getTitlePost(title: string) {
    return this.http.get<any[]>(`${this.jsonApi}?title=${title}`);
  }
}

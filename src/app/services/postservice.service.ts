import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {


  private baseUrl = 'http://localhost:8083'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/addPost`, post);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/getAllPosts`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/getPostById/${id}`);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/updatePost`, post);
  }

  deletePostById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletePostById/${id}`);
  }
}

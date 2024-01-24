import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  //for user
  createUser(User: Object): Observable<Object> {
    console.log("inside service")
    console.log(User);
    return this.http.post(`${this.baseUrl}/addUser`, User);
  }


  //for login
  loginUser(Login: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/loginUser`, Login)
  };


  // for the topic
  createTopic(topic: Object): Observable<Object> {
    console.log("inside service")
    console.log(topic);
    return this.http.post(`${this.baseUrl}/addTopic`, topic);
  }

  getAllTopics(): any {
    return this.http.get(`${this.baseUrl}/getAllTopics`);
  }
  deleteTopicById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteTopicById/${id}`, { responseType: 'text' });
  }

  getOneTopic(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getoneTopicById/${id}`);
  }
  updateTopic(topic: object) {
    return this.http.put(`${this.baseUrl}/updateTopic`, topic);
  }

  //for post 
  

  getOnePost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getonePostById/${id}`);
  

  }
  
  //for comments
  createComments(comment: Object): Observable<Object> {
    console.log("inside service")
    console.log(comment);
    return this.http.post(`${this.baseUrl}/addComment`, comment);
  }

  getAllComments():any
  {
    return this.http.get(`${this.baseUrl}/getAllComments`);
  }
  deleteCommentsById(id: number): Observable<any> {
    return this.http.delete( `${this.baseUrl}/deleteCommentsById/${id}`, { responseType: 'text' });
  }

  getoneCommentsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getoneCommentsById/${id}`);
  }

  // /*update Player */
  updateComments(comments:object){
    return this.http.put(`${this.baseUrl}/updateComments`,comments);
}
}
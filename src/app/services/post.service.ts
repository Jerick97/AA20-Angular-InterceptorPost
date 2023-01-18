import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  urlBase = 'https://jsonplaceholder.typicode.com/posts'; //url de la api
  constructor(private http:HttpClient) { }
  getPost(){ //método que nos retornara los post
    return this.http.get<any>(this.urlBase);
  }

}

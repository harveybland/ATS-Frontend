import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  posts() {
    return 'https://jsonplaceholder.typicode.com/posts'
  }

  post(id: number) {
    return `https://jsonplaceholder.typicode.com/posts/${id}`
  }

  albums() {
    return 'https://jsonplaceholder.typicode.com/albums'
  }

  users() {
    return 'http://localhost:4002/api/users'
  }

  user(id: number) {
    return `http://localhost:4002/api/user/${id}`
  }
} 

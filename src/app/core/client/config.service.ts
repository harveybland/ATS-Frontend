import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  // Users
  users() {
    return 'http://localhost:4002/api/users'
  }

  user(id: number) {
    return `http://localhost:4002/api/user/${id}`
  }

  // Vacancies
  vacancies() {
    return 'http://localhost:4002/api/vacancies'
  }

  // Data 
  posts() {
    return 'https://jsonplaceholder.typicode.com/posts'
  }

  countries() {
    return 'http://localhost:4002/api/countries'
  }

  titles() {
    return 'http://localhost:4002/api/titles'
  }
} 

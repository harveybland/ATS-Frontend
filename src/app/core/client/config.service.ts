import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  // Account

  createAccount() {
    return `http://localhost:4002/api/createAccount`
  }

  login() {

  }

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

  vacancy(id: number) {
    return `http://localhost:4002/api/vacancy/${id}`
  }

  get searchVacancy() {
    return 'http://localhost:4002/api/searchVacancy?'
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

  businessArea() {
    return 'http://localhost:4002/api/businessArea'
  }

  salaryType() {
    return 'http://localhost:4002/api/salaryType'
  }

  contractType() {
    return 'http://localhost:4002/api/contractType'
  }

  employmentType() {
    return 'http://localhost:4002/api/employmentType'
  }

  location() {
    return 'http://localhost:4002/api/location'
  }
} 

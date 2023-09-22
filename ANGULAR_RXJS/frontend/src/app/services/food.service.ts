import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from './food.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient
  ) { }

  API_URL = "https://jsonplaceholder.typicode.com/posts"

  getAll() {

    return this.http.get<IFood[]>(this.API_URL)
  }
}

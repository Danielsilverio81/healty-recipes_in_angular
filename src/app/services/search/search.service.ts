import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=2a0f30fd5fa24116ae73c395ab807303&query=${query}&number=10`;

    return this.http.get(apiUrl)
  }
}

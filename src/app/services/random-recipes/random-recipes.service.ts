import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=2a0f30fd5fa24116ae73c395ab807303&number=${take}`;

    return this.http.get(apiUrl);
  }
}

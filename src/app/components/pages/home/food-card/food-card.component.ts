import { Component, OnInit } from '@angular/core';
import { RandomRecipesService } from '../../../../services/random-recipes/random-recipes.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
})
export class FoodCardComponent implements OnInit {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor(private service: RandomRecipesService) {}
  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.service
      .listRandomFood(6)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = this.foods.concat(data.recipes);
      });
  }

  loadMore() {
    this.loadingMore = true;
    this.service.listRandomFood(3).pipe(
      finalize(() => {
        this.loadingMore = false;
      })
    ).subscribe((data:any)=> {
      this.foods = this.foods.concat(data.recipes);
    })
  }
}

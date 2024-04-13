import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
})
export class FoodCardComponent implements OnInit {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;
  ngOnInit(): void {}
}

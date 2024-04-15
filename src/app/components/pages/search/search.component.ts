import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public query: string = ""
  public foods: any = []

  constructor(private service: SearchService) {}

  ngOnInit(): void {
  }

  getSearch() {
    this.loading = true
    this.service.search(this.query).pipe(finalize(()=> {
      this.loading = false
    })).subscribe((data:any)=> {
      this.foods = data.results
    })
  }
}

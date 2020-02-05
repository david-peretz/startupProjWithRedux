import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { FormControl } from "@angular/forms";
import { SearchService } from "../../services/search.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  searchState: Observable<{ searchText: string }[]>;
  searchText: FormControl = new FormControl();
  subSearchText: Subscription;
  //constructor() {}

  constructor(private searchService: SearchService) {
    this.searchState = searchService.getState();
  }

  // store Action
  addSearch(searchText: string) {
    this.searchService.addSearch(searchText);
  }

  ngOnInit() {
    this.subSearchText = this.searchText.valueChanges
      .pipe(debounceTime(400))
      .subscribe(searchData => {
        this.addSearch(searchData);
        console.log(this.searchService.getValue());
      });
  }

  ngOnDestroy() {
    this.subSearchText.unsubscribe();
  }
}

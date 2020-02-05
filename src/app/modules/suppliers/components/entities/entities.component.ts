import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Supplier } from "../../interfaces/supplier.resource";
import { SearchService } from "../../services/search.service";
import { SuppliersService } from "../../services/suppliers.service";

@Component({
  selector: "entities",
  templateUrl: "./entities.component.html"
})
export class EntitiesComponent implements OnInit {
  searchText: string;
  searchText$: Observable<{ searchText: string }[]>;
  models: any;
  private id: string;

  constructor(searchService: SearchService, private suppliersService: SuppliersService) {
    this.searchText$ = searchService.getState();
    console.log(this.searchText$);
  }

  async ngOnInit() {
    this.models = await this.suppliersService.getAll();

    console.log(this.models);

    this.searchText$.subscribe(searchData => {
      this.searchText = searchData[0].searchText;
    });
  }
}

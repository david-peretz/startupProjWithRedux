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

  constructor(
    searchService: SearchService,
    private suppliersSrv: SuppliersService
  ) {
    this.searchText$ = searchService.getState();
    console.log(this.searchText$);
  }

  async ngOnInit() {
    await this.suppliersSrv.fetchSuppliers();

    this.models = this.suppliersSrv.suppliers;

    console.log(this.models);

    this.searchText$.subscribe(searchData => {
      this.searchText = searchData[0].searchText;
    });
  }
}

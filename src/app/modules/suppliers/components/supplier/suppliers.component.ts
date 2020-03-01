import { Component, OnInit } from "@angular/core";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../interfaces/supplier.resource";

@Component({
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.css"]
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[];
  searchText: String;
  constructor(private suppliersSrv: SuppliersService) {}

  async ngOnInit() {
    await this.suppliersSrv.fetchSuppliers();
    this.suppliers = this.suppliersSrv.suppliers;
  }
}

import { Component, OnInit } from "@angular/core";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../interfaces/supplier.resource";

@Component({
  selector: "app-orgs",
  templateUrl: "./orgs.component.html",
  styleUrls: ["./orgs.component.css"]
})
export class OrgrsComponent {
  suppliers: Supplier[];
  searchText: String;
  constructor() {}
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SuppliersService } from "../../services/suppliers.service";
import { AttributesService } from "../../services/attributes.service";
import { Supplier } from "../../interfaces/supplier.resource";
import { Attribute } from "../../interfaces/attribute.resource";

@Component({
  selector: "app-entity",
  templateUrl: "./entity-detail.component.html",
  styleUrls: ["./entity-detail.component.css"]
})
export class EntityDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suppliersSrv: SuppliersService,
    private attrSrv: AttributesService
  ) {}

  suppliers: Supplier = new Supplier();
  attributes: Attribute[] = [];
  async ngOnInit() {
    if (this.invalidValue) this.router.navigate(["/suppliers"]);
    const suppliers = await this.suppliersSrv.getAll();
    const attributes = await this.attrSrv.getAll();
    this.attributes = [...attributes];
    if (this.isAddMode) return;
    const supplier = suppliers.find(
      supplier => supplier.id === parseInt(this.id)
    );
    if (supplier) this.suppliers = { ...supplier };
  }

  handleSubmit() {
    this.suppliersSrv.updateLocal(this.suppliers);
    this.router.navigate(["/suppliers"], { replaceUrl: true });
  }

  get id() {
    return this.route.snapshot.paramMap.get("id");
  }

  get isAddMode() {
    return isNaN(parseInt(this.id)) && this.id === "new";
  }

  get invalidValue() {
    return isNaN(parseInt(this.id)) && this.id !== "new";
  }
}

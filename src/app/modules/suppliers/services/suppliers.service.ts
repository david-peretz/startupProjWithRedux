import { GenericHttpService } from "src/app/core/services/generic/generic.http.service";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "../interfaces/supplier.resource";
import { Injectable } from "@angular/core";
import { Serializer } from "src/app/core/services/generic/serializer";
import { ObservableStore } from "src/app/core/store/store";

@Injectable({ providedIn: "root" })
export class SuppliersService extends ObservableStore<Supplier[]> {
  private _suppliers: Supplier[] = [];
  suppliersUrl = "./suppliers.json";
  private resourceService;

  constructor(httpClient: HttpClient) {
    super([new Supplier()]);
    this.resourceService = new GenericHttpService<Supplier>(
      httpClient,
      this.suppliersUrl //,
      // new Serializer(Supplier)
    );
  }

  async fetchSuppliers() {
    // return this.http.get<Customer[]>(this.customersUrl).pipe(
    // map(customers => {
    // this.setState({ customers }, CustomersStoreActions.GetCustomers);
    ////  return customers;
    //  }),
    this._suppliers = await this.resourceService.list().toPromise();

    // return this.suppliers;
    //catchError(this.handleError)
    //);
  }

  get suppliers() {
    return this._suppliers;
  }



  updateLocal(supplier) {
    if (!supplier.id) {
      supplier.id = this.suppliers.length + 1;
      this.suppliers.push(supplier);
    } else if (!isNaN(supplier.id))
      this.suppliers[
        this.suppliers.findIndex(el => el.id === supplier.id)
      ] = supplier;
  }
}

import { GenericHttpService } from "src/app/core/services/generic/generic.http.service";
import { HttpClient } from "@angular/common/http";
import { Attribute } from "../interfaces/attribute.resource";
import { Injectable } from "@angular/core";
import { Serializer } from "src/app/core/services/generic/serializer";

@Injectable()
export class AttributesService extends GenericHttpService<Attribute> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "attributes.json"); //, new Serializer(Attribute)
  }

  private _attributes: Attribute[] = [];
  get attributes() {
    return this._attributes;
  }

  async getAll(): Promise<Attribute[]> {
    if (this._attributes.length === 0)
      this._attributes = await this.list().toPromise();
    return this.attributes;
  }
}

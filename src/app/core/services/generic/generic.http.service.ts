import { Resource } from "./resource";
import { HttpClient } from "@angular/common/http";
import { Serializer } from "./serializer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

export class GenericHttpService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    private endpoint: string //private serializer: Serializer<T>
  ) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(
        `${environment.uri}/${this.endpoint}`,
        // this.serializer.toJson(item)
        item
      )
      .pipe(map(data => data as T)); //this.serializer.fromJson(
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${environment.uri}/${this.endpoint}/${item.id}`,
        // this.serializer.toJson(item)
        item
      )
      .pipe(map(data => data as T)); //this.serializer.fromJson(
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${environment.uri}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => data as T)); //this.serializer.fromJson(
  }

  list(queryOptions?: any): Observable<T[]> {
    return this.httpClient
      .get(
        `${environment.uri}/${this.endpoint}${
          queryOptions ? queryOptions.toQueryString() : ""
        }`
      )
      .pipe(map((data: any) => data)); // this.convertData(
  }

  delete(id: number) {
    return this.httpClient.delete(`${environment.uri}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => item); // this.serializer.fromJson(
  }
}

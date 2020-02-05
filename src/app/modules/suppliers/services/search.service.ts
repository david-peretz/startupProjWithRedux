import { Store } from "../../../store/store";

export class SearchService extends Store<{ searchText: string }[]> {
  constructor() {
    super([{ searchText: "" }]);
  }
  // store reducer generate new state
  addSearch(searchText: string) {
    const newState = [{ searchText: searchText }];
    this.setState(newState);
  }
}

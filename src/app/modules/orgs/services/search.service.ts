import { ObservableStore } from "../../../core/store/store";

export class SearchService extends ObservableStore<{ searchText: string }[]> {
  constructor() {
    super([{ searchText: "" }]);
  }
  // store reducer generate new state
  addSearch(searchText: string) {
    const newState = [{ searchText: searchText }];
    this.setState(newState);
  }
}

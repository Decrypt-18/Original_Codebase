import { createSelector } from "reselect";
import { RootState } from "src/redux/reducers";

export const accountsSelector = createSelector(
  (state: RootState) => state.accountsReducer,
  accounts => accounts
);

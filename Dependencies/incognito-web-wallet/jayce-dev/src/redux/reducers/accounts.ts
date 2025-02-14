import { IAction } from "./interface";
import {
  ACTION_FETCHED_ACCOUNTS,
  ACTION_FETCH_FAIL_ACCOUNTS
} from "../actions/accounts";

export interface IAccState {
  isFetching: boolean;
  isFetched: boolean;
  data: any[];
}

const initialState: IAccState = {
  isFetching: false,
  isFetched: false,
  data: []
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION_FETCHED_ACCOUNTS: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: [...action.payload]
      };
    }
    case ACTION_FETCH_FAIL_ACCOUNTS: {
      return {
        ...state,
        isFetching: false,
        isFetched: false
      };
    }
    default:
      return state;
  }
};

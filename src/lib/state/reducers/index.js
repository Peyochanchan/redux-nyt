import { actions } from "../actions/index";
import { combineReducers } from "redux";
import { topStories } from "./top_stories";
import { mostPopular } from "./most_popular";
const {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_ERROR
} = actions;

const initialState = {
isFetching: false,
hasError: null,
};

export function reducer(state= initialState, action) {
  switch(action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isFetching: true,
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        has_error: action.payload.error,
      }

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
  topStories,
  mostPopular,
});

export default rootReducer;

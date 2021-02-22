//redux
import { combineReducers } from "redux";

//reducers
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;

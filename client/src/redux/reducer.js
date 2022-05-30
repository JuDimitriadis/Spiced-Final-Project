import { combineReducers } from "redux";
import { searchAndResultsReducer } from "./searchAndResults/slicer";

const rootReducer = combineReducers({
    searchAndResultsReducer: searchAndResultsReducer,
});

export default rootReducer;

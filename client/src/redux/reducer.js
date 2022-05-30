import { combineReducers } from "redux";
import { searchAndResultsReducer } from "./searchAndResults/slicer";
import { locationSearchReducer } from "./locationSearch/slicer";

const rootReducer = combineReducers({
    searchAndResultsReducer: searchAndResultsReducer,
    locationSearchReducer: locationSearchReducer,
});

export default rootReducer;

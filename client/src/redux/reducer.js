import { combineReducers } from "redux";
import { searchAndResultsReducer } from "./searchAndResults/slicer";
import { locationSearchReducer } from "./locationSearch/slicer";
import { myBookingsReducer } from "./myBookings/slicer";

const rootReducer = combineReducers({
    searchAndResultsReducer: searchAndResultsReducer,
    locationSearchReducer: locationSearchReducer,
    myBookingsReducer: myBookingsReducer,
});

export default rootReducer;

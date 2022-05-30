export function searchAndResultsReducer(searchAndResults = [], action) {
    if (action.type == "searchAndResults/receivedsearchData") {
        searchAndResults = action.payload.searchData;
    }

    return searchAndResults;
}

// ACTION CREATORS -----------------------------------

export function receivedsearchData(searchData) {
    return {
        type: "searchAndResults/receivedsearchData",
        payload: { searchData },
    };
}

export function searchAndResultsReducer(searchAndResults = [], action) {
    if (action.type == "searchAndResults/receivedsearchData") {
        searchAndResults = action.payload.searchData;
    }

    if (action.type == "searchAndResults/slotBooked") {
        searchAndResults = searchAndResults.map((slot) => {
            if (slot.appointamentsid === action.payload) {
                return {
                    ...slot,
                    booked: true,
                };
            } else {
                return slot;
            }
        });
    }
    console.log("reducer final", searchAndResults);
    return searchAndResults;
}

// ACTION CREATORS -----------------------------------

export function receivedsearchData(searchData) {
    return {
        type: "searchAndResults/receivedsearchData",
        payload: { searchData },
    };
}

export function slotBooked(slotId) {
    return {
        type: "searchAndResults/slotBooked",
        payload: slotId,
    };
}

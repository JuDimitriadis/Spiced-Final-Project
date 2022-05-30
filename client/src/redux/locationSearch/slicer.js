export function locationSearchReducer(viewState = [], action) {
    if (action.type == "locationSearch/receviedViewState") {
        viewState = action.payload.viewState;
    }

    return viewState;
}

// ACTION CREATORS -----------------------------------

export function receviedViewState(viewState) {
    return {
        type: "locationSearch/receviedViewState",
        payload: { viewState },
    };
}

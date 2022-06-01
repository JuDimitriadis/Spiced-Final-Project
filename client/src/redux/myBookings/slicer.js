export function myBookingsReducer(myBookings = [], action) {
    if (action.type == "myBookings/receivedBookingList") {
        myBookings = action.payload.bookingList;
    }

    if (action.type == "myBookings/bookingCanceled") {
        myBookings = myBookings.map((slot) => {
            console.log("slot.slotid ", slot.slotid);
            console.log("action.payload ", action.payload);
            if (slot.slotid === action.payload) {
                return {
                    ...slot,
                    user_id: null,
                    service_id: null,
                    service_name: null,
                };
            } else {
                return slot;
            }
        });
    }

    console.log("myBookings", myBookings);
    return myBookings;
}

// ACTION CREATORS -----------------------------------

export function receivedBookingList(bookingList) {
    return {
        type: "myBookings/receivedBookingList",
        payload: { bookingList },
    };
}

export function bookingCanceled(slotId) {
    return {
        type: "myBookings/bookingCanceled",
        payload: slotId,
    };
}

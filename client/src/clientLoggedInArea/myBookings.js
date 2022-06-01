/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCollapse from "react-collapsed";
import { receivedsearchData } from "../redux/searchAndResults/slicer";
import { receviedViewState } from "../redux/locationSearch/slicer";
import {
    receivedBookingList,
    bookingCanceled,
} from "../redux/myBookings/slicer";

export default function MyBookings() {
    const dispatch = useDispatch();
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const [isExpanded, setIsExpanded] = useState(false);

    const upcomingBooking = useSelector((state) => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        const today = `${year}-${month}-${day}`;
        const newArray = [];
        state.myBookingsReducer &&
            state.myBookingsReducer.map((item) => {
                const itemDate = item.slot_date.slice(0, 10);
                if (itemDate >= today && item.user_id) {
                    newArray.push(item);
                    return;
                } else {
                    return;
                }
            });
        return newArray;
    });

    const pastBookings = useSelector((state) => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        const today = `${year}-${month}-${day}`;
        const newArray = [];
        state.myBookingsReducer &&
            state.myBookingsReducer.map((item) => {
                const itemDate = item.slot_date.slice(0, 10);
                if (itemDate < today) {
                    newArray.push(item);
                    return;
                } else {
                    return;
                }
            });
        return newArray;
    });

    useEffect(() => {
        console.log("mounting my bookings");
        fetch("/api/get-bookings")
            .then((res) => res.json())
            .then((result) => {
                dispatch(receivedBookingList(result));
            });
    }, []);

    function handleMyBookingsClick() {
        setIsExpanded(!isExpanded);
    }

    function convertingDate(date) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        const convertedDate = day + "/" + month + "/" + year;
        return convertedDate;
    }

    function handleCancelClick(slotid) {
        const body = {
            slotid: slotid,
        };

        const bodyJson = JSON.stringify(body);

        fetch("/api/save-booking", {
            method: "DELETE",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("fetch result", result);
                dispatch(bookingCanceled(result[0].id));
                // setShowBookingConfirmation(true);
            });
    }

    console.log("upcomingBooking", upcomingBooking);
    // console.log(("pastBookings", pastBookings));

    return (
        <div className="myBookingContainer">
            <div
                className="myBookings"
                {...getToggleProps({ onClick: handleMyBookingsClick })}
            >
                {" "}
                {isExpanded ? (
                    <p className="myBookingsClose">Close</p>
                ) : (
                    <h3 className="myBookingsTitle">My Bookings</h3>
                )}
                {!isExpanded && upcomingBooking.length > 0 ? (
                    <p className="myBookingsMsg">
                        You have {upcomingBooking.length} upcoming bookings.
                    </p>
                ) : null}
                {!isExpanded && upcomingBooking.length === 0 ? (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p className="myBookingsMsg">
                        {" "}
                        You don't have upcoming bookings.
                    </p>
                ) : null}
            </div>
            <div {...getCollapseProps()}>
                <div className="myBookingsList">
                    {upcomingBooking.length > 0 ? (
                        <h2 className="myBookingsListTitle">
                            Upcoming Bookings
                        </h2>
                    ) : (
                        <p className="myBookingsMsg">
                            You don't have upcoming bookings.{" "}
                        </p>
                    )}
                    {upcomingBooking
                        ? upcomingBooking.map((item) => {
                              return (
                                  <>
                                      <div className="eachBooking">
                                          <p>{item.name}</p>
                                          <p>{item.service_name}</p>
                                          <p>€ {item.price}</p>
                                          <p>{item.slot_time.slice(0, 5)}</p>
                                          <p>
                                              {convertingDate(item.slot_date)}
                                          </p>
                                          <button
                                              className="myBookingsBtn"
                                              onClick={() =>
                                                  handleCancelClick(item.slotid)
                                              }
                                          >
                                              Cancel
                                          </button>
                                      </div>
                                  </>
                              );

                              // eslint-disable-next-line react/no-unescaped-entities
                          })
                        : null}
                    {pastBookings ? (
                        <h2 className="myBookingsListTitle">Past Bookings</h2>
                    ) : null}
                    {pastBookings &&
                        pastBookings.map((item) => {
                            return (
                                <>
                                    <div className="eachBooking">
                                        <p>{item.name}</p>
                                        <p>{item.service_name}</p>
                                        <p>€ {item.price}</p>
                                        <p>{item.slot_time.slice(0, 5)}</p>
                                        <p>{convertingDate(item.slot_date)}</p>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>{" "}
        </div>
    );
}

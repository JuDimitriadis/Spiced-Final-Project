/* eslint-disable indent */
import React from "react";
import useCollapse from "react-collapsed";
import { useEffect, useState, useRef } from "react";
import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import { useDispatch, useSelector } from "react-redux";
import { slotBooked } from "../redux/searchAndResults/slicer";
import { receivedBookingList } from "../redux/myBookings/slicer";

export default function SearchAndResults() {
    const [searchNameValue, setSearchNameValue] = useState();
    const [selectedMarker, setSelectedMarker] = useState();
    const [selectLocation, setSelectLocation] = useState();
    const [viewState, setViewState] = useState({
        longitude: 13.376634503116708,
        latitude: 52.536594783793284,
        zoom: 10,
    });

    const [timeSelected, setTimeSelected] = useState({
        time: "",
        date: "",
        professionalId: "",
    });
    const [serviceSelected, setServiceSelected] = useState({
        service: "",
        duration: "",
        professionalId: "",
    });
    const [durationServiceSelected, setDurationServiceSelected] = useState();
    const [convertedDateSelected, setConvertedDateSelected] = useState();
    const [showBookingConfirmation, setShowBookingConfirmation] =
        useState(false);
    const [expandId, setExpandId] = useState();
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const dispatch = useDispatch();

    const markersData = useSelector(
        (state) =>
            state.searchAndResultsReducer && [
                ...new Map(
                    state.searchAndResultsReducer.map((item) => [item.id, item])
                ).values(),
            ]
    );

    const servicesData = useSelector((state) => {
        if (state.searchAndResultsReducer) {
            let newArray = [];
            const isDuplicate = (obj, arr) => {
                return arr.some(
                    (x) => obj.id == x.id && obj.service_name == x.service_name
                );
            };

            for (const obj of state.searchAndResultsReducer) {
                if (!isDuplicate(obj, newArray)) {
                    newArray.push(obj);
                }
            }
            return newArray;
        }
    });

    const slots = useSelector((state) => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours() + 1;

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (hour === 24) {
            hour = hour - 1;
        }
        const today = `${year}-${month}-${day}`;
        const time = `${hour}:00:00`;

        if (state.searchAndResultsReducer) {
            let newArray = [];
            const isDuplicate = (obj, arr) => {
                return arr.some(
                    (x) => obj.id == x.id && obj.slot_time == x.slot_time
                );
            };

            for (const obj of state.searchAndResultsReducer) {
                const slotDate = obj.slot_date.slice(0, 10);

                if (slotDate === today) {
                    if (obj.slot_time > time) {
                        if (!isDuplicate(obj, newArray)) {
                            newArray.push(obj);
                        }
                    }
                } else {
                    if (!isDuplicate(obj, newArray)) {
                        newArray.push(obj);
                    }
                }
            }

            return newArray;
        }
    });

    function handleExpandClick(id) {
        if (!expandId) {
            setExpandId(id);
            setIsExpanded(true);
            setShowBookingConfirmation(false);
            return;
        }
        if (id === expandId && isExpanded === false) {
            setIsExpanded(true);
            return;
        }
        if (id === expandId && isExpanded === true) {
            setExpandId();
            setIsExpanded(false);
            setShowBookingConfirmation(false);
            return;
        }
        if (id != expandId && isExpanded === true) {
            setExpandId(id);
            return;
        }
        if (id != expandId && isExpanded === false) {
            setExpandId(id);
            setIsExpanded(true);
            setShowBookingConfirmation(false);
            return;
        }
    }

    function convertingDuration(duration) {
        const hours = +duration.slice(0, 2);
        const minutes = +duration.slice(3, 5);
        let convertedDuration;
        if (hours === 0) {
            convertedDuration = minutes + " minutes";
            setDurationServiceSelected(convertedDuration);
            return;
        }
        if (minutes === 0 && hours === 1) {
            convertedDuration = hours + " hour";
            setDurationServiceSelected(convertedDuration);
            return;
        }
        if (minutes === 0 && hours > 1) {
            convertedDuration = hours + " hours";
            setDurationServiceSelected(convertedDuration);
            return;
        }
        if (minutes > 1 && hours === 1) {
            convertedDuration = hours + " hour and " + minutes + " minutes";
            setDurationServiceSelected(convertedDuration);
            return;
        }
        if (minutes > 1 && hours > 1) {
            convertedDuration = hours + " hours and " + minutes + " minutes";
            setDurationServiceSelected(convertedDuration);
            return;
        }
    }

    function convertingDate(date) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);

        setConvertedDateSelected(day + "/" + month + "/" + year);
        return;
    }

    function handleBookingClick() {
        const body = {
            serviceId: serviceSelected.serviceId,
            appointmentId: timeSelected.appointmentId,
        };

        const bodyJson = JSON.stringify(body);

        fetch("/api/save-booking", {
            method: "POST",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                dispatch(slotBooked(result[0].id));
                setShowBookingConfirmation(true);
            })
            .then(() => {
                fetch("/api/get-bookings")
                    .then((res) => res.json())
                    .then((result) => {
                        dispatch(receivedBookingList(result));
                    });
            });
    }

    return (
        <>
            {" "}
            <h2 className="clientSearchTitle">
                Search for Beauty Professionals around you
            </h2>
            <div className="clientSearch">
                <div className="barSearchAndResults">
                    <FilterBar
                        searchNameValue={searchNameValue}
                        onSearchNameValueChange={setSearchNameValue}
                        selectedMarker={selectedMarker}
                        onSelectedMarkerChange={setSelectedMarker}
                        viewState={viewState}
                        onViewStateChange={setViewState}
                        selectLocation={selectLocation}
                        onSelectLocationChange={setSelectLocation}
                    ></FilterBar>
                    <div className="clientSearchResults">
                        {markersData &&
                            markersData.map((each) => {
                                return (
                                    <>
                                        <div
                                            className="eachReasult"
                                            key={each.id}
                                        >
                                            <div className="resultsTimeSlots">
                                                {slots &&
                                                    slots.map((eachSlot) => {
                                                        if (
                                                            eachSlot.id ===
                                                                each.id &&
                                                            !eachSlot.booked
                                                        ) {
                                                            return (
                                                                <p
                                                                    className={
                                                                        each.id ===
                                                                            timeSelected.professionalId &&
                                                                        eachSlot.slot_time ===
                                                                            timeSelected.time
                                                                            ? "timeSelected"
                                                                            : "timeNotSelected"
                                                                    }
                                                                    key={
                                                                        eachSlot.slot_time
                                                                    }
                                                                    onClick={() => {
                                                                        if (
                                                                            expandId !=
                                                                            each.id
                                                                        ) {
                                                                            setExpandId();
                                                                            setIsExpanded(
                                                                                false
                                                                            );
                                                                        }
                                                                        if (
                                                                            showBookingConfirmation
                                                                        ) {
                                                                            setShowBookingConfirmation(
                                                                                false
                                                                            );
                                                                            setTimeSelected(
                                                                                {
                                                                                    time: "",
                                                                                    date: "",
                                                                                    professionalId:
                                                                                        "",
                                                                                }
                                                                            );
                                                                        }
                                                                        convertingDate(
                                                                            eachSlot.slot_date
                                                                        );
                                                                        setTimeSelected(
                                                                            {
                                                                                time: eachSlot.slot_time,
                                                                                appointmentId:
                                                                                    eachSlot.appointamentsid,
                                                                                date: eachSlot.slot_date,
                                                                                professionalId:
                                                                                    each.id,
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    {eachSlot.slot_time &&
                                                                        eachSlot.slot_time.slice(
                                                                            0,
                                                                            5
                                                                        )}
                                                                </p>
                                                            );
                                                        }
                                                    })}
                                            </div>
                                            <h1 className="eachResultName">
                                                {each.name}
                                            </h1>
                                            <p className="eachResultAddress">
                                                {each.address}
                                            </p>
                                            {servicesData &&
                                                servicesData.map(
                                                    (eachService) => {
                                                        if (
                                                            eachService.id ===
                                                            each.id
                                                        ) {
                                                            return (
                                                                <div
                                                                    key={
                                                                        eachService.service_name
                                                                    }
                                                                    className={
                                                                        each.id ===
                                                                            serviceSelected.professionalId &&
                                                                        eachService.service_name ===
                                                                            serviceSelected.service
                                                                            ? "eachServiceDataSelected"
                                                                            : "eachServiceData"
                                                                    }
                                                                    onClick={() => {
                                                                        if (
                                                                            expandId !=
                                                                            each.id
                                                                        ) {
                                                                            setExpandId();
                                                                            setIsExpanded(
                                                                                false
                                                                            );
                                                                        }
                                                                        setShowBookingConfirmation(
                                                                            false
                                                                        );
                                                                        convertingDuration(
                                                                            eachService.duration
                                                                        );
                                                                        setServiceSelected(
                                                                            {
                                                                                service:
                                                                                    eachService.service_name,
                                                                                serviceId:
                                                                                    eachService.serviceid,
                                                                                duration:
                                                                                    eachService.duration,

                                                                                professionalId:
                                                                                    each.id,
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    <p>
                                                                        {
                                                                            eachService.service_name
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        €{" "}
                                                                        {
                                                                            eachService.price
                                                                        }
                                                                    </p>
                                                                </div>
                                                            );
                                                        }
                                                    }
                                                )}
                                            <div className="expandedContent">
                                                {" "}
                                                {expandId === each.id ? (
                                                    <section
                                                        {...getCollapseProps()}
                                                    >
                                                        {timeSelected.professionalId !=
                                                        each.id ? (
                                                            <p className="expandedContentWarning">
                                                                Please select
                                                                time
                                                            </p>
                                                        ) : null}
                                                        {serviceSelected.professionalId !=
                                                        each.id ? (
                                                            <p className="expandedContentWarning">
                                                                Please select
                                                                service
                                                            </p>
                                                        ) : null}
                                                        {serviceSelected.professionalId ===
                                                            each.id &&
                                                        timeSelected.professionalId ===
                                                            each.id &&
                                                        showBookingConfirmation ===
                                                            false ? (
                                                            <>
                                                                <p className="expandedContentMsg">
                                                                    Would you
                                                                    like to
                                                                    confirm the{" "}
                                                                    {
                                                                        serviceSelected.service
                                                                    }{" "}
                                                                    at{" "}
                                                                    {timeSelected.time.slice(
                                                                        0,
                                                                        5
                                                                    )}{" "}
                                                                    on{" "}
                                                                    {
                                                                        convertedDateSelected
                                                                    }{" "}
                                                                </p>
                                                                <p className="expandedContentMsg">
                                                                    This service
                                                                    takes about{" "}
                                                                    {
                                                                        durationServiceSelected
                                                                    }
                                                                </p>
                                                                <button
                                                                    className="expandedContentBtn"
                                                                    onClick={
                                                                        handleBookingClick
                                                                    }
                                                                >
                                                                    Confirm
                                                                    Booking
                                                                </button>
                                                            </>
                                                        ) : null}
                                                        {expandId === each.id &&
                                                        showBookingConfirmation ===
                                                            true ? (
                                                            <>
                                                                {" "}
                                                                <p className="expandedContentMsg">
                                                                    Cool! Your
                                                                    booking is
                                                                    saved. You
                                                                    you can
                                                                    check it out
                                                                    at any time
                                                                    in{" "}
                                                                    <strong>
                                                                        My
                                                                        Bookings
                                                                    </strong>
                                                                </p>
                                                            </>
                                                        ) : null}
                                                    </section>
                                                ) : null}
                                                <p
                                                    className="searchResultLink"
                                                    {...getToggleProps({
                                                        onClick: () => {
                                                            handleExpandClick(
                                                                each.id
                                                            );
                                                        },
                                                    })}
                                                >
                                                    {" "}
                                                    {isExpanded &&
                                                    expandId === each.id
                                                        ? "Close"
                                                        : "Book Now"}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
                <LocationSearch
                    searchNameValue={searchNameValue}
                    onSearchNameValueChange={setSearchNameValue}
                    selectedMarker={selectedMarker}
                    onSelectedMarkerChange={setSelectedMarker}
                    viewState={viewState}
                    onViewStateChange={setViewState}
                    selectLocation={selectLocation}
                    onSelectLocationChange={setSelectLocation}
                ></LocationSearch>
            </div>
        </>
    );
}

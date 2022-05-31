import { useEffect, useState, useRef } from "react";
import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import BookingBox from "./bookingBox";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";

export default function SearchAndResults() {
    const [timeSelected, setTimeSelected] = useState({
        time: "",
        professionalId: "",
    });
    const [serviceSelected, setServiceSelected] = useState({
        service: "",
        professionalId: "",
    });

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
        if (state.searchAndResultsReducer) {
            let newArray = [];
            const isDuplicate = (obj, arr) => {
                return arr.some(
                    (x) => obj.id == x.id && obj.slot_time == x.slot_time
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

    return (
        <>
            {" "}
            <h2 className="clientSearchTitle">
                Search for Beauty Professionals around you
            </h2>
            <div className="clientSearch">
                <div className="barSearchAndResults">
                    <FilterBar></FilterBar>
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
                                                            each.id
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
                                                                        console.log(
                                                                            "clicked"
                                                                        );
                                                                        setTimeSelected(
                                                                            {
                                                                                time: eachSlot.slot_time,
                                                                                professionalId:
                                                                                    each.id,
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    {eachSlot.slot_time.slice(
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
                                                                        setServiceSelected(
                                                                            {
                                                                                service:
                                                                                    eachService.service_name,
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
                                            <p
                                                className="searchResultLink"
                                                // onClick={settingShowBookingBox}
                                            >
                                                Book Now
                                            </p>
                                        </div>
                                        {/* {showBookingbox ? (
                                            <BookingBox
                                                professionalId={
                                                    each.professional_id
                                                }
                                                showBookingbox={showBookingbox}
                                                onShowBookingBoxChange={
                                                    settingShowBookingBox
                                                }
                                            ></BookingBox>
                                        ) : null} */}
                                    </>
                                );
                            })}
                    </div>
                </div>
                <LocationSearch></LocationSearch>
            </div>
        </>
    );
}

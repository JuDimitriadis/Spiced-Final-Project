import { useEffect, useState } from "react";
import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";

export default function SearchAndResults() {
    // const dispatch = useDispatch();

    // const searchData = useSelector(
    //     (state) =>
    //         state.searchAndResultsReducer && state.searchAndResultsReducer
    // );

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

    console.log("servicesData", servicesData);
    console.log("slots", slots);
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
                                                                    key={
                                                                        eachSlot.slot_time
                                                                    }
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
                                                                <div className="eachServiceData">
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
                                            <p className="searchResultLink">
                                                Book Now
                                            </p>
                                        </div>
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

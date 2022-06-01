import React from "react";
import useCollapse from "react-collapsed";
import { useEffect, useState, useRef } from "react";
import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";

export default function SearchAndResults() {
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
    const [expandId, setExpandId] = useState();
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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

    function handleExpandClick(id) {
        if (!expandId) {
            setExpandId(id);
            setIsExpanded(true);
            return;
        }
        if (id === expandId && isExpanded === false) {
            setIsExpanded(true);
            return;
        }
        if (id === expandId && isExpanded === true) {
            setExpandId();
            setIsExpanded(false);
            return;
        }
        if (id != expandId && isExpanded === true) {
            setExpandId(id);
            return;
        }
        if (id != expandId && isExpanded === false) {
            setExpandId(id);
            setIsExpanded(true);
            return;
        }
    }

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
                                                                                date: eachSlot.slot_date,
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
                                                            <p>
                                                                Please select
                                                                time
                                                            </p>
                                                        ) : null}
                                                        {serviceSelected.professionalId !=
                                                        each.id ? (
                                                            <p>
                                                                Please select
                                                                service
                                                            </p>
                                                        ) : null}
                                                        {serviceSelected.professionalId ===
                                                            each.id &&
                                                        timeSelected.professionalId ===
                                                            each.id ? (
                                                            <>
                                                                <p>
                                                                    Would you
                                                                    like to
                                                                    confirm the{" "}
                                                                    {
                                                                        serviceSelected.service
                                                                    }
                                                                    (
                                                                    {
                                                                        serviceSelected.duration
                                                                    }
                                                                    ) at{" "}
                                                                    {
                                                                        timeSelected.time
                                                                    }{" "}
                                                                    on{" "}
                                                                    {timeSelected.date.slice(
                                                                        8,
                                                                        10
                                                                    )}
                                                                    /
                                                                    {timeSelected.date.slice(
                                                                        5,
                                                                        7
                                                                    )}
                                                                    /
                                                                    {timeSelected.date.slice(
                                                                        0,
                                                                        4
                                                                    )}{" "}
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
                <LocationSearch></LocationSearch>
            </div>
        </>
    );
}

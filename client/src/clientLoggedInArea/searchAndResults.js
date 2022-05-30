import { useEffect, useState } from "react";
import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";

export default function SearchAndResults() {
    const dispatch = useDispatch();

    const searchData = useSelector(
        (state) =>
            state.searchAndResultsReducer && state.searchAndResultsReducer
    );

    const markersData = useSelector(
        (state) =>
            state.searchAndResultsReducer && [
                ...new Map(
                    state.searchAndResultsReducer.map((item) => [item.id, item])
                ).values(),
            ]
    );

    return (
        <div className="clientSearch">
            <LocationSearch></LocationSearch>
            <div className="barSearchAndResults">
                <FilterBar></FilterBar>
                <div className="clientSearchResults">
                    {markersData &&
                        markersData.map((each) => {
                            return (
                                <>
                                    <div className="eachReasult" key={each.id}>
                                        <h1 className="eachResultName">
                                            {each.name}
                                        </h1>
                                        <p className="eachResultAddress">
                                            {each.address}
                                        </p>
                                        {searchData &&
                                            searchData.map((eachService) => {
                                                if (
                                                    eachService.id === each.id
                                                ) {
                                                    return (
                                                        <>
                                                            <p>
                                                                {
                                                                    eachService.service_name
                                                                }
                                                            </p>
                                                            <p>
                                                                {
                                                                    eachService.price
                                                                }
                                                            </p>
                                                        </>
                                                    );
                                                }
                                            })}
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
        // </div>
    );
}

// address: "Willy-Lessing-Straße 4"
// category: "Nails"
// duration: "01:00:00"
// geojson: {type: 'Point', coordinates: Array(2)}
// id: 7
// name: "Red Nails"
// price: 50
// service_name: "Acrylic Overlay"

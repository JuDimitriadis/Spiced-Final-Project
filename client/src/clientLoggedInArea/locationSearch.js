let mapbox_token;
if (process.env.NODE_ENV == "production") {
    mapbox_token = process.env;
} else {
    mapbox_token = require("../secret.json");
}

import { useEffect, useState } from "react";
import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";
import { receviedViewState } from "../redux/locationSearch/slicer";

mapboxgl.accessToken = mapbox_token.mapbox_token;

export default function LocationSearch({
    searchNameValue,
    onSearchNameValueChange,
    selectedMarker,
    onSelectedMarkerChange,
    viewState,
    onViewStateChange,
    selectLocation,
    onSelectLocationChange,
}) {
    const geocoder = GeocoderService({
        accessToken: mapbox_token.mapbox_token,
    });
    const dispatch = useDispatch();

    const markersData = useSelector(
        (state) =>
            state.searchAndResultsReducer && [
                ...new Map(
                    state.searchAndResultsReducer.map((item) => [item.id, item])
                ).values(),
            ]
    );

    const viewCoordinates = useSelector(
        (state) => state.locationSearchReducer && state.locationSearchReducer
    );

    const [searchList, setSearchList] = useState();
    const [highlight, setHighlight] = useState();

    useEffect(() => {
        dispatch(
            receviedViewState({
                longitude: viewState.longitude,
                latitude: viewState.latitude,
            })
        );
    }, []);

    useEffect(() => {
        if (
            viewCoordinates.latitude != viewState.latitude ||
            viewCoordinates.longitude != viewState.longitude
        ) {
            onViewStateChange({
                longitude: viewCoordinates.longitude,
                latitude: viewCoordinates.latitude,
            });
            setSearchList(null);
            onSelectLocationChange(null);
        }
    }, [viewCoordinates]);

    useEffect(() => {
        const clickClose = () => {
            setSearchList();
        };
        if (searchList) {
            window.addEventListener("click", clickClose);
        } else {
            window.removeEventListener("click", clickClose);
        }
    }, [searchList, viewState]);

    let serachVal;

    async function handleAddressQuery(evt) {
        serachVal = evt.target.value;
        const query = evt.target.value;
        onSelectLocationChange(query);
        const response = await geocoder
            .forwardGeocode({ query, limit: 5 })
            .send();
        if (serachVal === query) {
            setSearchList(response.body.features);
        }

        return;
    }

    async function handleAddressQuerySubmit(evt) {
        evt.preventDefault();
        onViewStateChange({
            longitude: searchList.geometry.coordinates[0],
            latitude: searchList.geometry.coordinates[1],
            zoom: 11,
        });
        dispatch(
            receviedViewState({
                longitude: searchList.geometry.coordinates[0],
                latitude: searchList.geometry.coordinates[1],
            })
        );
        setSearchList(null);
    }

    function handleInputClick(evt) {
        if (evt.target.value) {
            if (!searchList) {
                handleAddressQuery(evt);
            }
        }
    }

    function handleLocationClick([lgt, ltd], name) {
        onSelectLocationChange(name);
        onViewStateChange({
            longitude: lgt,
            latitude: ltd,
            zoom: 11,
        });
        dispatch(
            receviedViewState({
                longitude: lgt,
                latitude: ltd,
            })
        );
        setSearchList(null);
    }

    function handleMouseEnter(evt) {
        setHighlight(evt._targetInst.index);
    }

    function handleInputKeyDown(evt) {
        if (evt.keyCode === 27) {
            setSearchList();
            return;
        }
        if (evt.keyCode === 40) {
            if (highlight >= 4) {
                return;
            } else if (highlight >= 0) {
                setHighlight(highlight + 1);
                return;
            } else if (!highlight) {
                setHighlight(0);
                return;
            }
            return;
        }

        if (evt.keyCode === 38) {
            if (highlight === 0) {
                return;
            } else {
                setHighlight(highlight - 1);
            }
        }

        if (evt.keyCode === 13) {
            handleLocationClick(
                searchList[highlight].center,
                searchList[highlight].place_name
            );
            return;
        }
    }

    function handleMouseLeaveBox() {
        setHighlight(null);
    }

    function handleMoveEnd({ longitude, latitude }) {
        dispatch(
            receviedViewState({
                longitude: longitude,
                latitude: latitude,
            })
        );
    }

    return (
        <>
            {" "}
            <div className="locationSearch">
                <form
                    className="addressQueryForm"
                    onSubmit={handleAddressQuerySubmit}
                >
                    <div className="addressQueryInputBox">
                        <img src="/address.png"></img>
                        <input
                            type="text"
                            name="addressQuery"
                            placeholder="City, postcode, district ...."
                            value={selectLocation}
                            onChange={handleAddressQuery}
                            onKeyDown={handleInputKeyDown}
                            onClick={handleInputClick}
                        ></input>
                        {/* <button className="addressQueryBtn">Search</button> */}
                    </div>
                </form>
                {searchList ? (
                    <div
                        className="searchResultsBox"
                        onMouseLeave={handleMouseLeaveBox}
                    >
                        {searchList.map((result, index) => {
                            return (
                                <div
                                    className={`searchResult ${
                                        highlight === index ? "highlight" : ""
                                    }`}
                                    key={result.id}
                                    onClick={() =>
                                        handleLocationClick(
                                            result.center,
                                            result.place_name
                                        )
                                    }
                                    onMouseEnter={handleMouseEnter}
                                >
                                    <p>{result.place_name} </p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
                <ReactMapGL
                    {...viewState}
                    style={{ width: 500, height: 300 }}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    className="mapContainer"
                    mapboxApiAccessToken={mapbox_token}
                    onMove={(evt) => onViewStateChange(evt.viewState)}
                    onMoveEnd={(evt) => handleMoveEnd(evt.viewState)}
                >
                    {markersData &&
                        markersData.map((data) => (
                            <Marker
                                key={data.id}
                                longitude={data.geojson.coordinates[1]}
                                latitude={data.geojson.coordinates[0]}
                            >
                                <button
                                    className="mapMarkerBtn"
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        onSelectedMarkerChange(data);
                                        console.log("CLICKED", evt);
                                    }}
                                >
                                    <img src={`/${data.category}.png`}></img>
                                </button>
                            </Marker>
                        ))}
                    {selectedMarker ? (
                        <Popup
                            longitude={selectedMarker.geojson.coordinates[1]}
                            latitude={selectedMarker.geojson.coordinates[0]}
                            onClose={() => {
                                onSelectedMarkerChange(null);
                            }}
                        >
                            <div className="popupContainer">
                                <h2
                                    className="popupContainerTitle"
                                    onClick={() =>
                                        onSearchNameValueChange(
                                            selectedMarker.name
                                        )
                                    }
                                >
                                    {selectedMarker.name}
                                </h2>
                                <p className="popupContainerAddress">
                                    {selectedMarker.address}
                                </p>
                            </div>
                        </Popup>
                    ) : null}
                </ReactMapGL>
            </div>
        </>
    );
}

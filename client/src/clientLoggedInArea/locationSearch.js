const { mapbox_token } = require("../secret.json");
import { useEffect, useState } from "react";
import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker, Popup } from "react-map-gl";

mapboxgl.accessToken = mapbox_token;

export default function LocationSearch() {
    const geocoder = GeocoderService({
        accessToken: mapbox_token,
    });

    const [searchList, setSearchList] = useState();
    const [selectLocation, setSelectLocation] = useState();
    const [highlight, setHighlight] = useState();
    const [markersData, setMarkersData] = useState();
    const [viewState, setViewState] = useState({
        longitude: 13.38333,
        latitude: 52.51667,
        zoom: 10,
    });

    useEffect(() => {
        const clickClose = () => {
            setSearchList();
        };
        if (searchList) {
            window.addEventListener("click", clickClose);
        } else {
            window.removeEventListener("click", clickClose);
        }

        fetch("/api/get-places")
            .then((res) => res.json())
            .then((result) => {
                console.log("fetch result", result);
                setMarkersData(result);
            });
    }, [searchList, viewState]);

    let serachVal;

    async function handleAddressQuery(evt) {
        serachVal = evt.target.value;
        const query = evt.target.value;
        setSelectLocation(query);
        const response = await geocoder
            .forwardGeocode({ query, limit: 5 })
            .send();
        if (serachVal === query) {
            setSearchList(response.body.features);
        }
        console.log(searchList);

        return;
    }

    async function handleAddressQuerySubmit(evt) {
        evt.preventDefault();
        setViewState({
            longitude: searchList.geometry.coordinates[0],
            latitude: searchList.geometry.coordinates[1],
            zoom: 11,
        });
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
        setSelectLocation(name);
        setViewState({
            longitude: lgt,
            latitude: ltd,
            zoom: 11,
        });
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

    return (
        <>
            <div className="locationSearch">
                <h2 className="locationSearchTitle">
                    Search for Beauty Professionals around you
                </h2>
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
                        <button className="addressQueryBtn">Search</button>
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
                    className="map-container"
                    mapboxApiAccessToken={mapbox_token}
                    onViewStateChange={(viewState) => setViewState(viewState)}
                >
                    {markersData &&
                        markersData.map((data) => (
                            <Marker
                                key={data.id}
                                longitude={data.geojson.coordinates[1]}
                                latitude={data.geojson.coordinates[0]}
                            >
                                <button className="mapMarkerBtn">
                                    <img src="/Hairdresser.png"></img>
                                </button>
                            </Marker>
                        ))}
                </ReactMapGL>
            </div>
        </>
    );
}

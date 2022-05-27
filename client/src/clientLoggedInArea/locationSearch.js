const { mapbox_token } = require("../secret.json");
import React, { useRef, useEffect, useState } from "react";
import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = mapbox_token;

export default function LocationSearch() {
    const geocoder = GeocoderService({
        accessToken: mapbox_token,
    });

    const [searchLongitude, setSearchLongitude] = useState();
    const [searchLatitude, setSearchLatitude] = useState();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [longitude, setLongitude] = useState(13.38333);
    const [latitude, setLatitude] = useState(52.51667);
    const [zoom, setZoom] = useState(10);
    const [searchList, setSearchList] = useState();
    const [selectLocation, setSelectLocation] = useState();
    const [highlight, setHighlight] = useState();

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [longitude, latitude],
            zoom: zoom,
        });

        if (!map.current) return;
        map.current.on("move", () => {
            setLongitude(map.current.getCenter().lng.toFixed(4));
            setLatitude(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
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
    }, [searchList]);

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
            setSearchLongitude(
                response.body.features[0].geometry.coordinates[0]
            );
            setSearchLatitude(
                response.body.features[0].geometry.coordinates[1]
            );
        }

        return;
    }

    async function handleAddressQuerySubmit(evt) {
        // ASK ABOUT HOW CAN I DEAL WITH THE ASYNC HERE
        evt.preventDefault();
        setSearchList(null);
        setLongitude(searchLongitude);
        setLatitude(searchLatitude);
        setZoom(11);

        map.current.jumpTo({
            center: [searchLongitude, searchLatitude],
            zoom: 11,
        });
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
        setSearchList(null);
        setLongitude(lgt);
        setLatitude(ltd);
        setZoom(11);

        map.current.jumpTo({
            center: [lgt, ltd],
            zoom: 11,
        });
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
                                    <p>{result.place_name}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}

                <div>
                    <div
                        ref={mapContainer}
                        style={{ width: 500, height: 300 }}
                        className="map-container"
                    />
                </div>
            </div>
        </>
    );
}

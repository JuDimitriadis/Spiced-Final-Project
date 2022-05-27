const { mapbox_token } = require("../secret.json");
import React, { useRef, useEffect, useState } from "react";
import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";
// import Map from "react-map-gl";
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
            // style: "mapbox://styles/mapbox/dark-v10",
            center: [longitude, latitude],
            zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on("move", () => {
            setLongitude(map.current.getCenter().lng.toFixed(4));
            setLatitude(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    async function handleAddressQuery(evt) {
        //ASK ABOUT CLEAN UP FUNCTION HERE
        const query = evt.target.value;
        setSelectLocation(query);
        const response = await geocoder
            .forwardGeocode({ query, limit: 5 })
            .send();
        if (selectLocation === query) {
            console.log("selectLocation === query");
        }
        setSearchList(response.body.features);
        setSearchLongitude(response.body.features[0].geometry.coordinates[0]);
        setSearchLatitude(response.body.features[0].geometry.coordinates[1]);
        return;
    }

    //     bbox: (4) [2.22422400085346, 48.8156060108013, 2.46976999462145, 48.9020129995121]
    // center: (2) [2.35183, 48.85658]
    // context: [{…}]
    // geometry: {type: 'Point', coordinates: Array(2)}
    // id: "place.14749210607497330"
    // place_name: "Paris, France"
    // place_type: (2) ['region', 'place']
    // properties: {short_code: 'FR-75', wikidata: 'Q90'}
    // relevance: 1
    // text: "Paris"
    // type: "Feature"

    async function handleAddressQuerySubmit(evt) {
        // ASK ABOUT HOW CAN I DEAL WITH THE ASYNC HERE
        evt.preventDefault();
        setSearchList(null);
        setLongitude(searchLongitude);
        setLatitude(searchLatitude);
        setZoom(12);

        map.current.jumpTo({
            center: [searchLongitude, searchLatitude],
            zoom: 12,
        });
    }

    function handleLocationClick([lgt, ltd], name) {
        setSelectLocation(name);
        setSearchList(null);
        setLongitude(lgt);
        setLatitude(ltd);
        setZoom(12);

        map.current.jumpTo({
            center: [lgt, ltd],
            zoom: 12,
        });
    }

    function handleMouseEnter(evt) {
        // console.log("evt index", evt._targetInst.index);
        setHighlight(evt._targetInst.index);
    }

    function handleInputKeyDown(evt) {
        console.log("evt keycode", evt.keyCode);
        if (evt.keyCode === 40) {
            setHighlight(0);
        }
    }

    function handleKeyDown(evt) {
        console.log("evt keycode", evt.keyCode);
        if (evt.keyCode === 40) {
            if (evt._targetInst.index >= 4) {
                return;
            } else {
                setHighlight(evt._targetInst.index + 1);
            }
        } else if (evt.keyCode === 38) {
            if (evt._targetInst.index === 0) {
                return;
            } else {
                setHighlight(evt._targetInst.index - 1);
            }
        } else if (evt.keyCode === 13) {
            handleLocationClick(
                searchList[evt._targetInst.index].center,
                searchList[evt._targetInst.index].place_name
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
                                    onKeyDown={handleKeyDown}
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

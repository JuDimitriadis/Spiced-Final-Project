const { mapbox_token } = require("../secret.json");

import React, { useRef, useEffect, useState } from "react";
import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";
// import Map from "react-map-gl";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = mapbox_token;
// "pk.eyJ1IjoianVwYXppbiIsImEiOiJjbDNuNnp2NzkwYW42M3JzOWJlaXZuZHd4In0.POPRTTdSjBqvomRajaetWQ";

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
        const response = await geocoder
            .forwardGeocode({ query, limit: 5 })
            .send();
        setSearchList(response.body.features);
        setSearchLongitude(response.body.features[0].geometry.coordinates[0]);
        setSearchLatitude(response.body.features[0].geometry.coordinates[1]);
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
        setLongitude(searchLongitude);
        setLatitude(searchLatitude);
        setZoom(12);

        map.current.jumpTo({
            center: [searchLongitude, searchLatitude],
            zoom: 12,
        });
    }

    return (
        <>
            {" "}
            <form
                className="addressQueryForm"
                onSubmit={handleAddressQuerySubmit}
            >
                <div className="addressQueryInputBox">
                    <input
                        type="text"
                        name="addressQuery"
                        placeholder="Where would you like to find a beauty professional?"
                        onChange={handleAddressQuery}
                    ></input>
                </div>
                {searchList ? (
                    <div className="searchResultsBox">
                        {searchList.map((result) => {
                            return (
                                <div className="searchResult" key={result.id}>
                                    <p>{result.place_name}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}

                <button className="addressQueryBtn">Search</button>
            </form>
            <div>
                <div
                    ref={mapContainer}
                    style={{ width: 600, height: 400 }}
                    className="map-container"
                />
            </div>
        </>
    );
}

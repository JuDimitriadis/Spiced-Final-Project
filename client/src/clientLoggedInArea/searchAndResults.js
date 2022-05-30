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

    const [sliderValue, setSliderValue] = useState([0, 600]);
    const [viewSearch, setViewSearch] = useState({
        longitude: 13.376634503116708,
        latitude: 52.536594783793284,
    });

    useEffect(() => {
        const body = {
            ltd: viewSearch.latitude,
            lgt: viewSearch.longitude,
            name: ``,
            low: sliderValue[0],
            hight: sliderValue[1],
            category: ``,
        };
        const bodyJson = JSON.stringify(body);

        fetch("/api/get-search-data", {
            method: "POST",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                dispatch(receivedsearchData(result));
                setSliderValue([result[0].price, result[result.length - 1]]);
            });
    }, [viewSearch]);

    return (
        <div className="clientSearch">
            <LocationSearch onViewSearchChange={setViewSearch}></LocationSearch>
            <div className="barSearchAndResults">
                <FilterBar
                    sliderValue={sliderValue}
                    onSliderValueChange={setSliderValue}
                ></FilterBar>
                <div className="clientSearchResults"> I AM SERACH REAULSTS</div>
            </div>
        </div>
    );
}

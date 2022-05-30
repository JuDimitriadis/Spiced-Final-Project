import { useEffect, useState } from "react";
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { receivedsearchData } from "../redux/searchAndResults/slicer";

const PriceRangeSlider = withStyles({
    root: {
        height: 20,
        padding: "13px 0",
        width: "250px",
    },
    thumb: {
        height: 30,
        width: 30,
        backgroundColor: " rgb(65, 63, 63)",
        borderColor: "buttonborder",
        borderWidth: "1px",
        borderStyle: "outset",
        borderImage: "initial",
        marginTop: -7,
        marginLeft: -13,
        boxShadow: "Black 2px 2px",
        "&:focus, &:hover, &$active": {
            boxShadow: "Black 0 2px 3px 1px",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
        color: "Black",
    },
    track: {
        height: 15,
        color: "white",
        opacity: 0.4,
    },
    rail: {
        color: "rgba(255, 255, 255, 0.151)",
        opacity: 1,
        height: 15,
        boxShadow: "black 2px 2px 4px",
        borderRadius: "5px",
        borderColor: "buttonborder",
        borderWidth: "1px",
        borderStyle: "outset",
        borderImage: "initial",
    },
})(Slider);

export default function FilterBar() {
    const [sliderValue, setSliderValue] = useState([0, 600]);
    const [searchNameValue, setSearchNameValue] = useState();
    const [searchCategoryValue, setSearchCategoryValue] = useState();

    const dispatch = useDispatch();
    const viewCoordinates = useSelector(
        (state) => state.locationSearchReducer && state.locationSearchReducer
    );
    useEffect(() => {
        const body = {
            ltd: viewCoordinates.latitude,
            lgt: viewCoordinates.longitude,
            name: searchNameValue || ``,
            low: sliderValue[0],
            hight: sliderValue[1],
            category: searchCategoryValue || ``,
        };
        console.log("body", body);
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
            });
    }, [viewCoordinates, sliderValue, searchNameValue, searchCategoryValue]);

    function disablePastDates() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return `${year}-${month}-${day}`;
    }

    function updateRange(evt, data) {
        setSliderValue(data);
    }

    function handleCategoryChange(newValue) {
        if (newValue === "categories") {
            setSearchCategoryValue();
        } else {
            setSearchCategoryValue(newValue);
        }
    }

    return (
        <div className="filterBar">
            <div className="filterBarName">
                <img src="/store.png"></img>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(evt) => setSearchNameValue(evt.target.value)}
                ></input>
            </div>
            <div className="filterBarDate">
                <input type="date" name="date" min={disablePastDates()}></input>
            </div>
            <div className="filterBarCategories">
                <select
                    name="categories"
                    onChange={(evt) => handleCategoryChange(evt.target.value)}
                >
                    <option value="categories">Categories</option>
                    <option value="barber">Barber</option>
                    <option value="eyebrows">Eyebrows</option>
                    <option value="hairdresser">Hairdresser</option>
                    <option value="skinCare">Skin Care</option>
                    <option value="spa">Spa</option>
                    <option value="makeup">Makeup</option>
                    <option value="nails">Nails</option>
                </select>
            </div>
            <div className="filterBarSlider">
                <Typography className="filterBarSliderTypography">
                    Price Range
                </Typography>
                <PriceRangeSlider
                    value={sliderValue}
                    defaultValue={[0, 600]}
                    color="secondary"
                    onChange={updateRange}
                    valueLabelDisplay="auto"
                    aria-labelledby="Price Range"
                    getAriaValueText={(value) => value}
                    min={0}
                    max={600}
                ></PriceRangeSlider>
            </div>
            <button>Reset Filter</button>
        </div>
    );
}

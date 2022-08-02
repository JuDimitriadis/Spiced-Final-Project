import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ClientLoginRegistration from "./clientLoginRegistration";

export default function Welcome() {
    const [picUrl, setPicUrl] = useState();

    // const [accountType, setAccountType] = useState();

    useEffect(() => {
        const random = Math.floor(Math.random() * 6) + 1;
        const picUrl = `${random}.jpg`;
        setPicUrl(picUrl);
    }, []);

    // function handleRadioBtnSelection({ target }) {
    //     setAccountType(target.defaultValue);
    // }

    return (
        <>
            {" "}
            <img className="welcomeBackground" src={picUrl} />
            <div className="shadowWelcome">
                <h1 className="welcomeLogo"> The Beauty Booking</h1>
                <ClientLoginRegistration></ClientLoginRegistration>
                {/* <p className="beautyProviderLink">
                    If you are a Beauty Provider&nbsp;
                    <strong> Click Here</strong>
                </p> */}
            </div>
        </>
    );
}

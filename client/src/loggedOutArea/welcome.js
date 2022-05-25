import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Welcome() {
    const [picUrl, setPicUrl] = useState();

    useEffect(() => {
        fetch("api/get-welcome-img")
            .then((result) => {
                return result.json();
            })
            .then((result) => {
                console.log("result", result);
                setPicUrl(result);
            });
    }, []);

    return (
        <>
            {" "}
            <img className="welcomeBackground" src={picUrl} />
            <div className="shadowWelcome">
                <div className="welcomeModalContainer">
                    {/* {showLogin: } */}
                    <form className="welcomeForm">
                        <div className="welcomeFormInputBox">
                            <img src="/email.png"></img>
                            <input
                                name="email"
                                type="email"
                                placeholder="E-mail"
                            ></input>
                        </div>
                        <div className="welcomeFormInputBox">
                            <img src="/password1.png"></img>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                            ></input>{" "}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

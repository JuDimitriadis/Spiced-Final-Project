import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Welcome() {
    const [picUrl, setPicUrl] = useState();
    const [showLogin, setShowLogin] = useState(true);
    const [showCreatAccount, setShowCreatAccount] = useState(false);

    useEffect(() => {
        const random = Math.floor(Math.random() * 6) + 1;
        const picUrl = `${random}.jpg`;
        setPicUrl(picUrl);
    }, []);

    function handleAccountClick() {
        setShowLogin(false);
        setShowCreatAccount(true);
    }

    function handleLoginClick() {
        setShowCreatAccount(false);
        setShowLogin(true);
    }

    function handleLoginSubmit(evt) {
        evt.preventDefault();
        console.log("login evt", evt.target);
    }

    function handleAccountSubmit(evt) {
        evt.preventDefault();
        console.log("account evt", evt.target);
    }

    return (
        <>
            {" "}
            <img className="welcomeBackground" src={picUrl} />
            <div className="shadowWelcome">
                <h1 className="welcomeLogo"> The Beauty Booking</h1>
                <div className="welcomeModalContainer">
                    {showLogin ? (
                        <>
                            {" "}
                            <form
                                className="welcomeForm"
                                onSubmit={handleLoginSubmit}
                            >
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
                                <button className="welcomeFormBtn">
                                    Get Started
                                </button>
                            </form>
                            <div className="welcomeLinks">
                                <p onClick={handleAccountClick}>
                                    Create Account
                                </p>
                                <p>Forgot Password?</p>
                            </div>
                        </>
                    ) : null}
                    {showCreatAccount ? (
                        <>
                            {" "}
                            <form
                                className="welcomeForm"
                                onSubmit={handleAccountSubmit}
                            >
                                <div className="welcomeFormInputBox">
                                    <img src="/username.png"></img>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                    ></input>
                                </div>
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
                                <div className="welcomeFormInputBox">
                                    <img src="/password1.png"></img>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                    ></input>{" "}
                                </div>
                                <button className="welcomeFormBtn">
                                    Get Started
                                </button>
                            </form>
                            <div className="welcomeLinksLogin ">
                                <p onClick={handleLoginClick}>Login</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}

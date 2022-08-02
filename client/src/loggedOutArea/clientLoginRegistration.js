import { useState, useEffect } from "react";
import ResetPassword from "./resetPassword";

export default function ClientLoginRegistration() {
    const [showLogin, setShowLogin] = useState(true);
    const [showCreatAccount, setShowCreatAccount] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [error, setError] = useState();

    function handleAccountClick() {
        setShowLogin(false);
        setShowResetPassword(false);
        setError(null);
        // setAccountType(null);
        setShowCreatAccount(true);
    }

    function handleLoginClick() {
        setShowCreatAccount(false);
        setShowResetPassword(false);
        setError(null);
        // setAccountType(null);

        setShowLogin(true);
    }

    function handleResetPassClick() {
        setShowCreatAccount(false);
        setShowLogin(false);
        setError(null);
        // setAccountType(null);

        setShowResetPassword(true);
    }

    function handleLoginSubmit(evt) {
        evt.preventDefault();
        const email = evt.target[0].value;
        const password = evt.target[1].value;

        const body = {
            email: email,
            password: password,
        };
        const bodyJson = JSON.stringify(body);

        fetch("/api/client-auth-login", {
            method: "POST",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.success === false) {
                    this.setState({
                        error: "Ops, somenthing went wrong! E-mail and/or password incorrect",
                    });
                } else {
                    // history.pushState({}, "", "/");
                    location.reload();
                    return;
                }
            })
            .catch((error) => {
                console.log("login error", error);
                setError("Ops, somenthig went wrong! Please try again");
            });
    }

    function handleAccountSubmit(evt) {
        evt.preventDefault();
        const name = evt.target[0].value;
        const email = evt.target[1].value;
        const password = evt.target[2].value;
        const confirmPassword = evt.target[3].value;
        console.log(
            "account evt",
            evt.target[4].defaultValue,
            "name",
            name,
            "email",
            email,
            "password",
            password,
            "confirmPassword",
            confirmPassword
        );

        if (password != confirmPassword) {
            setError("Passwords doesn't match");
            return;
        }
        const body = {
            name: name,
            email: email,
            // accountType: accountType,
            password: password,
        };
        const bodyJson = JSON.stringify(body);
        fetch("/api/create-client-account", {
            method: "POST",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("fetch result", result);
                console.log("result fetch REGISTRATION", result);
                if (result.success === true) {
                    // history.pushState({}, "", "/");
                    location.reload();
                    return;
                }
                if (result.error === "email") {
                    setError("Email already registered.");
                    return;
                }

                if (result.error === "others") {
                    setError("Ops, somenthig went wrong! Please try again");
                    return;
                }

                return;
            })
            .catch((error) => {
                console.log("CREATE ACCOUNT ERROR: ", error);
            });
    }

    return (
        <>
            {" "}
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
                                    required
                                ></input>
                            </div>
                            <div className="welcomeFormInputBox">
                                <img src="/password1.png"></img>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                ></input>{" "}
                            </div>{" "}
                            {error ? <p className="error">{error}</p> : null}
                            <button className="welcomeFormBtn">
                                Get Started
                            </button>
                        </form>
                        <div className="welcomeLinks">
                            <p onClick={handleAccountClick}>Create Account</p>
                            <p onClick={handleResetPassClick}>
                                Forgot Password?
                            </p>
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
                                    required
                                ></input>
                            </div>
                            <div className="welcomeFormInputBox">
                                <img src="/email.png"></img>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    required
                                ></input>
                            </div>
                            <div className="welcomeFormInputBox">
                                <img src="/password1.png"></img>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                ></input>{" "}
                            </div>
                            <div className="welcomeFormInputBox">
                                <img src="/password1.png"></img>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                ></input>{" "}
                            </div>
                            {error ? <p className="error">{error}</p> : null}
                            <button className="welcomeFormBtn">
                                Get Started
                            </button>
                        </form>
                        <div className="welcomeLinksLogin ">
                            <p onClick={handleLoginClick}>Login</p>
                        </div>
                    </>
                ) : null}
                {showResetPassword ? (
                    <ResetPassword
                        onLoginClick={handleLoginClick}
                    ></ResetPassword>
                ) : null}
            </div>
        </>
    );
}

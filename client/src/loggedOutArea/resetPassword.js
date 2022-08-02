import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitStepOne = this.onSubmitStepOne.bind(this);
        this.onSubmitStepTwo = this.onSubmitStepTwo.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log(this.state)
        );
    }

    onSubmitStepOne(evt) {
        evt.preventDefault();

        console.log("USER TRIED TO login", this.state);
        if (!this.state.email) {
            this.setState({
                error: "Please, fill out your e-mail address before sending code.",
            });
        } else {
            const body = {
                email: this.state.email,
            };
            const bodyJson = JSON.stringify(body);
            fetch("/reset-password", {
                method: "POST",
                body: bodyJson,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    if (result.success === "user not found") {
                        this.setState({
                            error: "E-mail not registered",
                        });
                        return;
                    }
                    if (result.success === true) {
                        this.setState({
                            step: 2,
                        });
                        return;
                    }
                    this.setState({
                        error: "Ops, somenthing went wrong! Please try again.",
                    });
                    return;
                })
                .catch((err) => {
                    console.log(err);
                    this.setState(
                        {
                            error: "Ops, somenthig went wrong! Please try again",
                        },
                        () => console.log(this.state)
                    );
                });
        }
    }

    onSubmitStepTwo(event) {
        event.preventDefault();

        console.log("USER TRIED TO code validation", this.state);
        if (
            !this.state.email ||
            !this.state.code ||
            !this.state.password ||
            !this.state.confirmPassword
        ) {
            this.setState({
                error: "Please, fill out all fields before continue.",
            });
            return;
        }
        if (this.state.password != this.state.confirmPassword) {
            this.setState(
                {
                    error: "Ops,password doesn't match",
                },
                () => console.log(this.state)
            );
            return;
        }

        const body = {
            email: this.state.email,
            code: this.state.code,
            password: this.state.password,
        };
        const bodyJson = JSON.stringify(body);
        fetch("/reset-password", {
            method: "PUT",
            body: bodyJson,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result, "result check code");
                if (result.success === true) {
                    history.pushState({}, "", "/");
                    location.reload();
                    return;
                } else {
                    this.setState({
                        error: "Invalid Code",
                    });
                    return;
                }
            });
    }
    renderStepOne() {
        return (
            <>
                <form className="welcomeForm" onSubmit={this.onSubmitStepOne}>
                    <div className="welcomeFormInputBox">
                        <img src="/email.png"></img>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <p className="error">{this.state.error}</p>
                    <button className="welcomeFormBtn">Send Code</button>
                </form>
            </>
        );
    }
    renderStepTwo() {
        return (
            <>
                <form className="welcomeForm" onSubmit={this.onSubmitStepTwo}>
                    <div className="welcomeFormInputBox">
                        <img src="/email.png"></img>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />{" "}
                    </div>
                    <div className="welcomeFormInputBox">
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="code"
                            placeholder="Code"
                        />
                    </div>
                    <div className="welcomeFormInputBox">
                        <img src="/password1.png"></img>{" "}
                        <input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            placeholder="New Password"
                        />
                    </div>
                    <div className="welcomeFormInputBox">
                        <img src="/password1.png"></img>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                        />
                    </div>
                    <p className="error">{this.state.error}</p>
                    <button className="welcomeFormBtn">Submit</button>
                </form>
            </>
        );
    }

    renderStep() {
        /*eslint indent: [2, 4, {"SwitchCase": 1}]*/
        switch (this.state.step) {
            case 1:
                return this.renderStepOne();
            case 2:
                return this.renderStepTwo();
        }
    }
    render() {
        return (
            <div className="welcomeModalContainer">
                {this.renderStep()}

                <div className="welcomeLinksLogin ">
                    <p onClick={this.props.onLoginClick}>Back to Login</p>
                </div>
            </div>
        );
    }
}

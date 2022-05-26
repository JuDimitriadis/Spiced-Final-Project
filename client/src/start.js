import ReactDOM from "react-dom";
import Welcome from "./loggedOutArea/welcome";
import App from "./clientLoggedInArea/app";

ReactDOM.render(<Welcome />, document.querySelector("main"));

fetch("/api/check-cookie-id")
    .then((res) => res.json())
    .then((result) => {
        if (result.success === false) {
            ReactDOM.render(<Welcome />, document.querySelector("main"));
        } else {
            ReactDOM.render(<App />, document.querySelector("main"));
        }
    });

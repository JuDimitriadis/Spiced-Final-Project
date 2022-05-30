import ReactDOM from "react-dom";
import Welcome from "./loggedOutArea/welcome";
import App from "./clientLoggedInArea/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as immutableState from "redux-immutable-state-invariant";
import reducer from "./redux/reducer";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(immutableState.default()))
);

fetch("/api/check-cookie-id")
    .then((res) => res.json())
    .then((result) => {
        if (result.success === false) {
            ReactDOM.render(<Welcome />, document.querySelector("main"));
        } else {
            ReactDOM.render(
                <Provider store={store}>
                    <App />{" "}
                </Provider>,
                document.querySelector("main")
            );
        }
    });

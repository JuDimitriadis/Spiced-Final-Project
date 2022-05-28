import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";

export default function App() {
    function logout() {
        fetch("/api/logout", {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.success === true) {
                    location.reload();
                }
                return;
            });
    }

    return (
        <>
            <div className="clientApp">
                <header className="clientAppHeader">
                    {" "}
                    <h1 className="appLogo"> The Beauty Booking</h1>
                    <img
                        className="logoutIcon"
                        src="/logout.png"
                        onClick={logout}
                    ></img>{" "}
                </header>
                <div className="clientSearch">
                    <LocationSearch></LocationSearch>
                    <FilterBar></FilterBar>
                </div>
            </div>
        </>
    );
}

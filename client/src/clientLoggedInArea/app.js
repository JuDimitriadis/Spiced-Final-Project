import LocationSearch from "./locationSearch";
import FilterBar from "./filterBar";
import SearchResults from "./searchResults";

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
                    <div className="barSearchAndResults">
                        <FilterBar></FilterBar>
                        <SearchResults></SearchResults>
                    </div>
                </div>
            </div>
        </>
    );
}

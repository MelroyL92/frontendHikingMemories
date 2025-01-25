import NavLinks from "../../components/NavLinks/NavLinks.jsx";
import CountryPage from "../CountryPages/CountryPage.jsx";

function Iceland() {





    return (
        <>
        <h1>Iceland Adventures</h1>
        <NavLinks to="/" text="Homepage"/>
            <CountryPage country="Iceland" />

        </>


    )
}

export default Iceland;
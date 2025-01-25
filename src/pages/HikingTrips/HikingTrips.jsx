import NavLinks from "../../components/NavLinks/NavLinks.jsx";

function HikingTrips() {





    return(
        <>
            <h1>Hiking Trips</h1>
            <nav className="nav-class">
                <NavLinks to="/" text="Homepage"/>
                <NavLinks to="/Upload" text="Upload"/>
            </nav>
            <div className="nav-class">
            <NavLinks to="/Scotland" text="Scotland"/>
            <NavLinks to="/Norway" text="Norway"/>
            <NavLinks to="/Albania" text="Albania"/>
            <NavLinks to="/Italy" text="Italy"/>
            <NavLinks to="/Germany" text="Germany"/>
            <NavLinks to="/Iceland" text="Iceland"/>
            </div>
        </>


    )
}

export default HikingTrips;
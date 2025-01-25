import NavLinks from "../../components/NavLinks/NavLinks.jsx";

function Homepage() {




    return (
        <>
            <h1>Hiking Memories</h1>
            <nav className="nav-class">
            <NavLinks to="/about" text="About"/>
            <NavLinks to="/HikingTrips" text="Hiking Trips"/>
            <NavLinks to="/Upload" text="Upload"/>
            </nav>
        </>
    )

}

export default Homepage
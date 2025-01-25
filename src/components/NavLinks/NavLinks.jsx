import {Link} from "react-router-dom";
import './Navlinks.css'


function NavLinks({to, text}) {




    return(
        <div className="nav-class">
            <ul className="nav-list">
                <li className="nav-link">
                    <Link to={to}>
                        <div>{text}</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks
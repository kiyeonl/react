import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to='/'>menu01</Link></li>
                <li><Link to='/Tab'>menu02</Link></li>
                <li><Link to='/sdsds'>menu03</Link></li>
                <li><Link to='/32'>menu04</Link></li>
                <li><Link to='/28'>menu05</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
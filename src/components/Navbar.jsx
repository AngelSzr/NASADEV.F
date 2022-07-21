import { FaSearch } from 'react-icons/fa'
import { IoMdPlanet } from 'react-icons/io'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand"><iomdplanet> <IoMdPlanet /> NASA Astronomy Picture of the Day</iomdplanet></a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-dark" type="submit"><fasearch>  Search</fasearch></button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar
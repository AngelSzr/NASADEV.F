import { IoMdPlanet } from 'react-icons/io'
import { useRef, useState } from 'react'
//hooks
import useFetcher from '../hooks/useFetcher'

const Navbar = () => {
    const [query, setQuery] = useState('2022-07-20') //Aqui que agregue la fecha del día que se consulta
    const { dataState: info, loading } = useFetcher(query)
    const searchRef = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setQuery(searchRef.current.value)
    }

    return (info, loading,
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand"> <IoMdPlanet /> NASA Astronomy Picture of the Day</a>
                <form onSubmit={handleSubmit} className="d-flex">
                    <input className="form-control me-2" type="date" placeholder="Fecha" aria-label="Search" ref={searchRef} />
                    <button className="btn btn-dark" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar

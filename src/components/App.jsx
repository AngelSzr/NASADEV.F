import Card from './Card'
import '../App.css'
import { IoMdPlanet } from 'react-icons/io'
import { useRef, useState } from 'react'
//hooks
import useFetcher from '../hooks/useFetcher'


function App() {
  const fecha = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  const [query, setQuery] = useState(fecha) //Aqui que agregue la fecha del día que se consulta
  const { dataState: info, loading } = useFetcher(query)
  const searchRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    //Agregar una funcion para que arroje un error si se escoje una fecha que no futura
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-center fs-4"> <IoMdPlanet className='fs-1' /> NASA Astronomy Picture of the Day</a>
          <form onSubmit={handleSubmit} className="d-flex">
            <input className="form-control me-2" type="date" placeholder="Fecha" aria-label="Search" ref={searchRef} min='1995-06-16' />
            <button className="btn btn-dark" type="submit" >Buscar</button>
          </form>
        </div>
      </nav>
      <div className="container">
        {loading ? '<Loading />' : <Card data={info} />}
      </div>
    </div>
  )
}


export default App


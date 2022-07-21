import Calendario from './Calendario'
import Card from './Card'
import Navbar from './Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Calendario />
        <Card />
      </div>
      <button type="button" className="btn btn-secondary" >Secondary</button>

    </div>
  )
}


export default App


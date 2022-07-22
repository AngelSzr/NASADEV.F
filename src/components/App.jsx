import Card from './Card'
import Navbar from './Navbar'
import '../App.css'


function App() {
  console.log(Navbar.info)
  return (
    <div>
      <Navbar />
      <div className="container">
        <Card />
      </div>

    </div>
  )
}


export default App


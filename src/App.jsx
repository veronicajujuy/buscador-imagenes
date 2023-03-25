
import Formulario from './components/Formulario'
import ImageContext from './Context/GlobalContext'
import './App.css'
import MostrarImagenes from './components/MostrarImagenes'

function App() {
  return (
   <div>
    <ImageContext>
      <Formulario />
      <MostrarImagenes/>
    </ImageContext>
   </div>
  )
}

export default App

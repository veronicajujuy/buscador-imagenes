
import Formulario from './components/Formulario'
import ImageContext from './Context/GlobalContext'
import './App.css'

function App() {
  return (
   <div>
    <ImageContext>
      <Formulario />
    </ImageContext>
   </div>
  )
}

export default App

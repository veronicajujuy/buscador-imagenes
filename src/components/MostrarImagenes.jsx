import { useGlobalStates } from "../Context/GlobalContext"
import Card from "./Card"
import "./MostrarImagenes.css"

const MostrarImagenes = () => {
    const {imagen, nodatos} = useGlobalStates()
  return (
    <div className="contenedor">
      {imagen && imagen.map(item =>
        <Card key={item.id} item={item}/>
      )}
      {nodatos ? nodatos: null}
    </div>
  )
}

export default MostrarImagenes

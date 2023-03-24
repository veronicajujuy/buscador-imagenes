import { createContext, useContext, useState } from "react";

export const GlobalState = createContext()

const ImageContext = ({children}) => {
    const [imagen, setImagen] = useState([])

    const fetchImage = async values => {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
          headers: {
            'Authorization': 'Client-ID 2b8bVy92EKm6vzJ80GnjZIVL4qRQMU9qgNgJ7-Oz7pA'
          }
        })
        const data = await response.json()
        setImagen(data.results)
      }

    return (
        <GlobalState.Provider value={{imagen, fetchImage}}>
            {children}
        </GlobalState.Provider>
    )
}

export default ImageContext

export const useGlobalStates = () => {
    return useContext(GlobalState)
}
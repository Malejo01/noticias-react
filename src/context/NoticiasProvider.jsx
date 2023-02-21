import { useState, useEffect, createContext} from 'react';
import axios from 'axios';

const NoticiasContext = createContext()

const NoticiasProvider= ({children}) => {
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] =useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(()=>{
        const consultarAPI= async () => {
            const url = `https://newsapi.org/v2/top-headlines?
            &language=es&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)

            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarAPI()
    },[categoria])


    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias
            }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext

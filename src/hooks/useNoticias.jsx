import { useContext } from "react";
import NoticiasContext from "../context/noticiasprovider";

const useNoticias = () =>{

    return useContext(NoticiasContext)
}
export default useNoticias
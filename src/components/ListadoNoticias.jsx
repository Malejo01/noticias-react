import {Grid, Pagination, Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

function ListadoNoticias() {

    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
        
    
    const totalPaginas = Math.ceil(totalNoticias/20) 
    return (
        <>
            
        <Stack 
                sx={{
                    marginY:5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'

                >
            <Pagination count={totalPaginas} 
                        color="primary" 
                        onChange={handleChangePagina}
                        page={pagina}
                        />
        </Stack>
        
            <Grid container spacing={5}> 
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

        <Stack 
                sx={{
                    marginY:5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'

                >
            <Pagination count={totalPaginas} 
                        color="primary" 
                        onChange={handleChangePagina}
                        page={pagina}
                        />
        </Stack>
        </>
    )
}

export default ListadoNoticias

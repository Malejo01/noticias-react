import {Grid, Typography, Pagination, Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

function ListadoNoticias() {

    const {noticias, totalNoticias, handleChangePagina} = useNoticias()
        
    
    const totalPaginas = Math.ceil(totalNoticias/20) 
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={'h3'}
                component={'h2'}
            >
                Últimas Noticias 
            </Typography>

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
                        />
        </Stack>
        </>
    )
}

export default ListadoNoticias

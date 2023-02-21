import {Grid, Typography, Pagination, Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

function ListadoNoticias() {

    const {noticias, totalNoticias} = useNoticias()
        
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
            <Pagination count={3} color="primary" />
        </Stack>
        </>
    )
}

export default ListadoNoticias

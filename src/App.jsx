import {Container, Grid, Typography} from '@mui/material'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/noticiasprovider'

function App() {
  

  return (
    <NoticiasProvider>
        <Header/>
        <Container>
        
          <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <Grid item  xs={12} md={6}>
              <Formulario/>
            </Grid>
          </Grid>

          <ListadoNoticias/>

        </Container>
      </NoticiasProvider>
  )
}

export default App

import Routes from './routes/Routes'
import { Theme } from './style/Theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalContextProvider } from './global/GlobalContextProvider'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </ThemeProvider>
  )
}


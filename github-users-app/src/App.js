import Routes from './routes/Routes'
import { Theme } from './style/Theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}


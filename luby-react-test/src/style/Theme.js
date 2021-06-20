import { createMuiTheme } from '@material-ui/core/styles'
import { primary, secondary } from './style'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        }
    }
})
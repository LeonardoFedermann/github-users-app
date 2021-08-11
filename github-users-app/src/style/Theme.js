import { createMuiTheme } from '@material-ui/core/styles'
import { primary, secondary } from './colors'

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
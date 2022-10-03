import React from 'react'
import { CoreLayout } from 'components'
import { Home } from 'pages'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {
    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <CoreLayout>
                <Home />
            </CoreLayout>
        </ThemeProvider>
    )
}

export default App

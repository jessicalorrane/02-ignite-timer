import { ThemeProvider } from 'styled-components'
import { Router } from './router'

import { GlobalStyle } from './styles/globo'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

import Router from './router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './style/theme'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from './store'
import { GlobalStyle } from './style/global.style'

function App() {
  const isDark = useRecoilValue(isDarkMode)
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  )
}

export default App

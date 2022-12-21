import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home, Coin } from 'pages'
import { Chart, Price } from 'components'
import Layout from 'layout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:coinId' element={<Coin />}>
            <Route path='chart' element={<Chart />} />
            <Route path='price' element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router

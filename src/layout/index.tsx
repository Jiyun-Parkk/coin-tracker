import styled from '@emotion/styled'
import { Header } from 'components'
import { Outlet } from 'react-router'

const Container = styled.main`
  max-width: 750px;
  padding: 0 20px;
  margin: 0 auto;
`

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout

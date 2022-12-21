import { useQuery } from 'react-query'
import { useLocation, useParams, Outlet, useMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { coin } from 'api'
import { Helmet } from 'react-helmet'

import { IInfoData, IPriceData } from 'types'
import { Loader } from 'components'
import { Container, Tabs } from './style'

interface RouteState {
  state: {
    name: string
  }
}

export const Coin = () => {
  const { coinId } = useParams()
  const { state } = useLocation() as RouteState
  const priceMatch = useMatch('/:coinId/price')
  const chartMatch = useMatch('/:coinId/chart')

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ['info', coinId],
    () => coin.info(coinId),
  )
  const { isLoading: tickersLoading, data: tickersData } = useQuery<IPriceData>(
    ['tickers', coinId],
    () => coin.tickers(coinId),
    {
      refetchInterval: 5000,
    },
  )

  const loading = infoLoading || tickersLoading

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <>
          <section className='coin-overview-box'>
            <div className='coin-view-items'>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </div>
            <div className='coin-view-items'>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </div>
            <div className='coin-view-items'>
              <span>Price:</span>
              <span>$ {tickersData?.quotes.USD.price.toFixed(3)}</span>
            </div>
          </section>
          <p className='coin-description'>{infoData?.description}</p>
          <section className='coin-overview-box'>
            <div className='coin-view-items'>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </div>
            <div className='coin-view-items'>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </div>
          </section>
          <section className='coin-info-tab-box'>
            <Tabs isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tabs>
            <Tabs isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tabs>
          </section>
          <Outlet />
        </>
      )}
    </Container>
  )
}
export default Coin

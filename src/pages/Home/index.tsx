import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { coin } from 'api'
import { Container, CoinIcon } from './style'
import { CoinInterface } from 'types'
import { Loader } from 'components'

export const Home = () => {
  //queryKey: unique identifier, fetcher function

  const { isLoading, data } = useQuery<CoinInterface[]>('allCoins', () => {
    return coin.getCoins()
  })

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {data?.slice(0, 99).map((coin) => (
            <li key={coin.id}>
              <Link to={`/${coin.id}/chart`} state={{ name: coin.name }}>
                <CoinIcon
                  logo={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}

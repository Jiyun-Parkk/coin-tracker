import axios from 'axios'
import { CoinInterface, IHistorical, IInfoData, IPriceData } from 'types'

const BASE_URL = `https://api.coinpaprika.com/v1`

type coinId = string | undefined

export const coin = {
  getCoins: async (): Promise<CoinInterface[]> => {
    const { data } = await axios(`${BASE_URL}/coins`)
    return data
  },
  info: async (coinId: coinId): Promise<IInfoData> => {
    const { data } = await axios(`${BASE_URL}/coins/${coinId}`)
    return data
  },
  tickers: async (coinId: coinId): Promise<IPriceData> => {
    const { data } = await axios(`${BASE_URL}/tickers/${coinId}`)
    return data
  },
  history: async (coinId: coinId): Promise<IHistorical[]> => {
    const endDate = Math.floor(Date.now() / 1000)
    const startDate = endDate - 60 * 60 * 23 * 1 // a week ago
    const { data } = await axios(
      `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
    )
    return data
  },
}

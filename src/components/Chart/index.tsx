import ApexChart from 'react-apexcharts'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from 'store'
import { coin } from 'api'
import { IHistorical } from 'types'

const Loader = styled.div`
  color: ${(props) => props.theme.textColor};
`

export const Chart = () => {
  const params = useParams()
  const { isLoading, data: historyData } = useQuery<IHistorical[]>(
    ['holcv', params.coinId],
    () => coin.history(params.coinId),
    {
      refetchInterval: 10000,
    },
  )
  const priceForData = historyData?.map((price) => {
    return {
      x: price.time_close as string,
      y: [
        Number(price.open.toFixed(3)),
        Number(price.high.toFixed(3)),
        Number(price.low.toFixed(3)),
        Number(price.close.toFixed(3)),
      ] as number[],
    }
  }) as []
  const isDark = useRecoilValue(isDarkMode)
  return (
    <div>
      {isLoading ? (
        <Loader>Loading chart...</Loader>
      ) : (
        <>
          <ApexChart
            type='candlestick'
            series={[
              {
                name: 'Price',
                data: priceForData,
              },
            ]}
            options={{
              theme: {
                mode: isDark ? 'dark' : 'light',
              },
              chart: {
                background: 'transparent',
                id: 'candles',
                toolbar: {
                  show: false,
                },

                dropShadow: {
                  enabled: true,
                  top: 5,
                  left: 5,
                  blur: 1,
                  color: '#000',
                  opacity: 0.35,
                },
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              xaxis: {
                categories: historyData?.map((price) => price.time_close),
                labels: {
                  show: false,
                  datetimeFormatter: { month: "mmm 'yy" },
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: '#39A2DB',
                    downward: '#DF5E5E',
                  },
                  wick: {
                    useFillColor: true,
                  },
                },
              },
            }}
          />
        </>
      )}
    </div>
  )
}

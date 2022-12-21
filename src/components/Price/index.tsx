import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { coin } from 'api'
import styled from 'styled-components'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { IPriceData } from 'types'

const Loader = styled.div`
  color: ${(props) => props.theme.textColor};
`
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.bgColor,
    color: theme.textColor,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.textColor,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.bgColor,
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  'th,td': {
    width: '50%',
  },
  th: {
    background: theme.thead,
  },
  td: {
    background: theme.tbody,
  },
}))

export const Price = () => {
  const params = useParams()
  const { isLoading, data: tickersDataTable } = useQuery<IPriceData>(
    ['tickersTable', params.coinId],
    () => coin.tickers(params.coinId),
  )

  return (
    <>
      {isLoading ? (
        <Loader>Loading price...</Loader>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 0,
            boxShadow: 0,
            marginBottom: '100px',
          }}
        >
          <Table sx={{ width: '100%' }} aria-label='customized table'>
            <TableBody>
              <StyledTableRow key={1}>
                <StyledTableCell component='th' align='center'>
                  Price(USD){' '}
                </StyledTableCell>
                <StyledTableCell component='td' align='center'>
                  $ {tickersDataTable?.quotes.USD.price.toFixed(3)}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={2}>
                <StyledTableCell component='th' align='center'>
                  Volume 24h{' '}
                </StyledTableCell>
                <StyledTableCell component='td' align='center'>
                  {tickersDataTable?.quotes.USD.volume_24h.toFixed(3)}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={3}>
                <StyledTableCell component='th' align='center'>
                  Market cap{' '}
                </StyledTableCell>
                <StyledTableCell component='td' align='center'>
                  {tickersDataTable?.quotes.USD.market_cap}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

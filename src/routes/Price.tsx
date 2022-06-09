import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
import styled from "styled-components";
import ApexChart from "react-apexcharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Loader = styled.div`
	color: ${(props) => props.theme.textColor};
`;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.bgColor,
		color: theme.textColor,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		color: theme.textColor,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	backgroundColor: theme.bgColor,
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
	"th,td": {
		width: 270,
	},
	th: {
		background: theme.thead,
	},
	td: {
		background: theme.tbody,
	},
}));
interface IPriceData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		};
	};
}

function Price() {
	const params = useParams();
	const { isLoading, data: tickersDataTable } = useQuery<IPriceData>(
		["tickersTable", params.coinId],
		() => fetchCoinTickers(params.coinId)
	);

	return (
		<>
			{isLoading ? (
				<Loader>Loading price...</Loader>
			) : (
				<TableContainer
					component={Paper}
					sx={{ borderRadius: 0, boxShadow: 0 }}
				>
					<Table sx={{ minWidth: 480 }} aria-label="customized table">
						<TableBody>
							<StyledTableRow key={1}>
								<StyledTableCell component="th" align="center">
									Price(USD){" "}
								</StyledTableCell>
								<StyledTableCell component="td" align="center">
									${" "}
									{tickersDataTable?.quotes.USD.price.toFixed(
										3
									)}
								</StyledTableCell>
							</StyledTableRow>
							<StyledTableRow key={2}>
								<StyledTableCell component="th" align="center">
									Volume 24h{" "}
								</StyledTableCell>
								<StyledTableCell component="td" align="center">
									{tickersDataTable?.quotes.USD.volume_24h.toFixed(
										3
									)}
								</StyledTableCell>
							</StyledTableRow>
							<StyledTableRow key={3}>
								<StyledTableCell component="th" align="center">
									Market cap{" "}
								</StyledTableCell>
								<StyledTableCell component="td" align="center">
									{tickersDataTable?.quotes.USD.market_cap}
								</StyledTableCell>
							</StyledTableRow>
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</>
	);
}
export default Price;

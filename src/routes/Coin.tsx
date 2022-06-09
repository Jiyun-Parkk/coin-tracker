import { useQuery } from "react-query";
import { useLocation, useParams, Outlet, useMatch } from "react-router";
import React, { Link } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GoChevronLeft } from "react-icons/go";
const BackBtn = styled.div`
	a {
		font-size: 50px;
		color: ${(props) => props.theme.textColor};
	}
`;
const Container = styled.div`
	max-width: 540px;
	padding: 0 20px;
	margin: 0 auto;
`;

const Loader = styled.span`
	display: block;
	text-align: center;
	color: ${(props) => props.theme.textColor};
	font-size: 28px;
`;

const Header = styled.header`
	position: relative;
	align-item: center;
	margin: 20px 0;
`;
const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	white-space: nowrap;
	font-size: 24px;
	text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
	font-weight: 600;
	color: ${(props) => props.theme.textColor};
`;

const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${(props) => props.theme.labelColor};
	padding: 10px 20px;
	border-radius: 10px;
`;
const OverviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	span:first-child {
		color: ${(props) => props.theme.textColor};
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	span:last-child {
		color: ${(props) => props.theme.accentColor};
	}
`;
const Description = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 20px 0px;
`;

const Tabs = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0px;
	gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
	height: 50px;
	line-height: 50px;
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
	background-color: ${(props) =>
		props.isActive ? props.theme.accentColor : props.theme.labelColor};
	border-radius: 10px;
	color: ${(props) => (props.isActive ? "#fff" : props.theme.textColor)};
	a {
		display: block;
	}
`;

interface RouteState {
	state: {
		name: string;
	};
}
interface IInfoData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	contract: string;
	platform: string;
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}
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

function Coin() {
	const { coinId } = useParams();
	const { state } = useLocation() as RouteState;
	const priceMatch = useMatch("/:coinId/price");
	const chartMatch = useMatch("/:coinId/chart");

	const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
		["info", coinId],
		() => fetchCoinInfo(coinId)
	);
	const { isLoading: tickersLoading, data: tickersData } =
		useQuery<IPriceData>(
			["tickers", coinId],
			() => fetchCoinTickers(coinId),
			{
				refetchInterval: 5000,
			}
		);

	const loading = infoLoading || tickersLoading;
	return (
		<Container>
			<Helmet>
				<title>
					{state?.name
						? state.name
						: loading
						? "Loading..."
						: infoData?.name}
				</title>
			</Helmet>
			<Header>
				<BackBtn>
					<Link to="/coin-tracker">
						<GoChevronLeft />
					</Link>
				</BackBtn>

				<Title>
					{state?.name
						? state.name
						: loading
						? "Loading..."
						: infoData?.name}
				</Title>
			</Header>
			{loading ? (
				<Loader>Loading...</Loader>
			) : (
				<>
					<Overview>
						<OverviewItem>
							<span>Rank:</span>
							<span>{infoData?.rank}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Symbol:</span>
							<span>${infoData?.symbol}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Price:</span>
							<span>
								$ {tickersData?.quotes.USD.price.toFixed(3)}
							</span>
						</OverviewItem>
					</Overview>
					<Description>{infoData?.description}</Description>
					<Overview>
						<OverviewItem>
							<span>Total Suply:</span>
							<span>{tickersData?.total_supply}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Max Supply:</span>
							<span>{tickersData?.max_supply}</span>
						</OverviewItem>
					</Overview>
					<Tabs>
						<Tab isActive={chartMatch !== null}>
							<Link to={`/${coinId}/chart`}>Chart</Link>
						</Tab>
						<Tab isActive={priceMatch !== null}>
							<Link to={`/${coinId}/price`}>Price</Link>
						</Tab>
					</Tabs>
					<Outlet />
				</>
			)}
		</Container>
	);
}
export default Coin;

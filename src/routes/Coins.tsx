import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import React, { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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
	height: 60px;
	display: flex;
	justify-content: center;
	align-item: center;
	margin: 20px 0;
`;
const Title = styled.h1`
	line-height: 60px;
	font-size: 38px;
	color: ${(props) => props.theme.textColor};
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
	background-color: ${(props) => props.theme.labelColor};
	color: ${(props) => props.theme.textColor};
	margin-bottom: 10px;
	height: 50px;
	border-radius: 15px;
	transition: transform 0.2s ease-in;
	box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
	a {
		display: flex;
		transition: color 0.2s ease-in;
		align-items: center;
		line-height: 50px;
		font-weight: 600;
		div {
			margin: 0px 10px 0 20px;
			transition: transform 0.2s ease-in;
		}
	}
	&:hover {
		transform: scale(1.01);
		a {
			color: ${(props) => props.theme.accentColor};
		}
		div {
			transform: scale(1.03);
		}
	}
`;

interface CoinIconLogo {
	logo: string;
}

const CoinIcon = styled.div<CoinIconLogo>`
	background: url("${(props) => props.logo}") no-repeat center / cover;
	width: 25px;
	height: 25px;
`;

interface CoinInterface {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

function Coins() {
	//queryKey: unique identifier, fetcher function
	const { isLoading, data } = useQuery<CoinInterface[]>(
		"allCoins",
		fetchCoins
	);
	return (
		<Container>
			<Helmet>
				<title>Coins</title>
			</Helmet>
			<Header>
				<Title>Coins</Title>
			</Header>
			{isLoading ? (
				<Loader>Loading...</Loader>
			) : (
				<CoinsList>
					{data?.slice(0, 99).map((coin) => (
						<Coin key={coin.id}>
							<Link
								to={`/${coin.id}`}
								state={{ name: coin.name }}
							>
								<CoinIcon
									logo={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
								/>
								{coin.name} &rarr;
							</Link>
						</Coin>
					))}
				</CoinsList>
			)}
		</Container>
	);
}
export default Coins;

import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import React, { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";
import { Loader, Header, Title, ModeButton } from "../Header";

const Container = styled.div`
	max-width: 540px;
	padding: 0 20px;
	margin: 0 auto;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
	margin: 0 auto;
	background-color: ${(props) => props.theme.labelColor};
	color: ${(props) => props.theme.textColor};
	margin-bottom: 10px;
	height: 50px;
	border-radius: 15px;
	transition: transform 0.2s ease-in;
	box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
	a {
		display: flex;
		font-size: 18px;
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
	const isDark = useRecoilValue(isDarkAtom);
	const setDarkAtom = useSetRecoilState(isDarkAtom);
	const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

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
				<ModeButton onClick={toggleDarkAtom} isActive={isDark}>
					{isDark ? "🌞" : "☾"}
				</ModeButton>
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

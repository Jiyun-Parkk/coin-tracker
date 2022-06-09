import React, { useState } from "react";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import "reset.css.ts";
import { ModeButton } from "./ModeButton";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	*{
		box-sizing:border-box;
	}
	body,html{
		width:100vw;
		overflow-x:hidden;
	}
	body::-webkit-scrollbar{
		display:none;
	}
	body {
		font-family:'Source Sans Pro', sans-serif;
		background-color:${(props) => props.theme.bgColor}
	}
	a{
		color:inherit;
		text-decoration:none;
	}
`;
const Container = styled.div`
	position: relative;
	max-width: 480px;
	margin: 0 auto;
`;

function App() {
	const lightIcon = "🌞";
	const darkIcon = "☾";
	const [mode, setMode] = useState(darkIcon);
	const [theme, setTheme] = useState(light);
	const handleMode = () => {
		mode === lightIcon ? setMode(darkIcon) : setMode(lightIcon);
		theme === light ? setTheme(dark) : setTheme(light);
	};
	return (
		<>
			<Container>
				<ModeButton isActive={theme === light} onClick={handleMode}>
					{mode}
				</ModeButton>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Router />
					<ReactQueryDevtools initialIsOpen={false} />
				</ThemeProvider>
			</Container>
		</>
	);
}

export default App;

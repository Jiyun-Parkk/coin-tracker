import React, { useState } from "react";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import "reset.css.ts";
import { ModeButton } from "./ModeButton";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	*{
		box-sizing:border-box;
	}
	body {
		width:540px;
		margin:0 auto;
		position:relative;
		font-family:'Source Sans Pro', sans-serif;
		background-color:${(props) => props.theme.bgColor}
	}
	a{
		color:inherit;
		text-decoration:none;
	}
`;

function App() {
	const [mode, setMode] = useState("☪");
	const [theme, setTheme] = useState(light);
	const handleMode = () => {
		mode === "🌞" ? setMode("☪") : setMode("🌞");
		theme === light ? setTheme(dark) : setTheme(light);
	};
	return (
		<>
			<ModeButton isActive={theme === light} onClick={handleMode}>
				{mode}
			</ModeButton>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router />
				<ReactQueryDevtools initialIsOpen={false} />
			</ThemeProvider>
		</>
	);
}

export default App;

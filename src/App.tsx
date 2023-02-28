import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import { main } from "./styles/themes/main"

export const App: React.FC = () => {
	return (

		<ThemeProvider theme={main}>
			{/* <Router /> */}
			<div>
				<p>Isso é um teste</p>
			</div>
			<GlobalStyles />
		</ThemeProvider>
	)
}

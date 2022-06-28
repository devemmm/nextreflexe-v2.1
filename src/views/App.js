import * as React from 'react';
import '../styles/App.css';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate } from 'react-router';
import Signin from './Signin';
import Signup from './Signup';
import HomePage from './HomePage';
import NotFound from './NotFound';

function App() {
	const theme = createTheme({
		colors: {
			primary: '#018F55',
			grey: '#F5F5F5',
		},
		palette: {
			primary: {
				main: '#018F55',
			},
			text: {
				primary: '#fffff',
			},
		},
		typography: {
			fontFamily: 'Open Sans',
			button: {
				fontVariant: 'normal',
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='home' element={<HomePage />}></Route>
					<Route path='' element={<Navigate to='/home' replace={true} />}></Route>
					<Route path="/signin" element={<Signin />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;

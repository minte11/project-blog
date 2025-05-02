'use client';
import React from 'react';
import Cookies from 'js-cookie';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, themeDefault }) => {
	const [theme, setTheme] = React.useState(themeDefault || 'light');

	const toggleTheme = () => setTheme(prevState => prevState === 'light' ? 'dark' : 'light');

	React.useEffect(() => {
		Cookies.set('theme', theme, { expires: 365 });
	}, [theme]);

	const value = React.useMemo(() => ({
		theme,
		toggleTheme,
	}), [theme]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

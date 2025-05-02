'use client';
import React from 'react';
import clsx from 'clsx';
import {
	Work_Sans, Spline_Sans_Mono,
} from 'next/font/google';
import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants';
import { ThemeContext } from '@/components/ThemeProvider';

const mainFont = Work_Sans({
	subsets: ['latin'],
	display: 'fallback',
	weight: 'variable',
	variable: '--font-family',
});

const monoFont = Spline_Sans_Mono({
	subsets: ['latin'],
	display: 'fallback',
	weight: 'variable',
	variable: '--font-family-mono',
});

const ThemeWrapper = ({ children }) => {
	const { theme } = React.useContext(ThemeContext);
	return (
		<html
			lang="en"
			className={clsx(mainFont.variable, monoFont.variable)}
			data-color-theme={theme}
			style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
		>
			{children}
		</html>
	);
};

export default ThemeWrapper;

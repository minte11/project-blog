'use client';
import React from 'react';
import clsx from 'clsx';
import {Rss, Sun, Moon} from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import {ThemeContext} from "@/components/ThemeProvider";
import styles from './Header.module.css';

function Header ({className, ...delegated}) {
	const {theme, toggleTheme} = React.useContext(ThemeContext);
	
	return (
		<header
			className={clsx(styles.wrapper, className)}
			{...delegated}
		>
			<Logo/>
			
			<div className={styles.actions}>
				<button className={styles.action}>
					<Rss
						size="1.5rem"
						style={{
							// Optical alignment
							transform: 'translate(2px, -2px)',
						}}
					/>
					<VisuallyHidden>
						View RSS feed
					</VisuallyHidden>
				</button>
				<button onClick={toggleTheme} className={styles.action}>
					{theme === 'dark' ? <Sun size="1.5rem"/> : <Moon size="1.5rem"/>}
					<VisuallyHidden>
						Toggle dark / light mode
					</VisuallyHidden>
				</button>
			</div>
		</header>
	);
}

export default Header;

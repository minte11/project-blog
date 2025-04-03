'use client';
import React from 'react';
import clsx from 'clsx';
import {
	Play,
	Pause,
	RotateCcw,
} from 'react-feather';
import {motion} from 'framer-motion';
import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
	{label: 'red', value: 'hsl(348deg 100% 60%)'},
	{label: 'yellow', value: 'hsl(50deg 100% 55%)'},
	{label: 'blue', value: 'hsl(235deg 100% 65%)'},
];

function CircularColorsDemo () {
	const [timeElapsed, setTimeElapsed] = React.useState(0);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const intervalRef = React.useRef(null);
	
	const handlePlayPause = () => setIsPlaying(!isPlaying);
	
	const handleReset = () => {
		setTimeElapsed(0);
		setIsPlaying(false);
	};
	
	React.useEffect(() => {
		if (!isPlaying) {
			return clearInterval(intervalRef.current);
		}
		
		const interval = setInterval(() => {
			setTimeElapsed((previousVal) => previousVal + 1);
		}, 1000)
		intervalRef.current = interval;
		return () => clearInterval(interval);
	}, [isPlaying]);

	const selectedColor = COLORS[timeElapsed % COLORS.length];
	
	return (
		<Card as="section" className={styles.wrapper}>
			<ul className={styles.colorsWrapper}>
				{COLORS.map((color, index) => {
					const isSelected =
						color.value === selectedColor.value;
					
					return (
						<motion.li
							className={styles.color}
							key={index}
						>
							{isSelected && (
								<motion.div
									layoutId="underline"
									className={
										styles.selectedColorOutline
									}
								/>
							)}
							<div
								className={clsx(
									styles.colorBox,
									isSelected &&
									styles.selectedColorBox
								)}
								style={{
									backgroundColor: color.value,
								}}
							>
								<VisuallyHidden>
									{color.label}
								</VisuallyHidden>
							</div>
						</motion.li>
					);
				})}
			</ul>
			
			<div className={styles.timeWrapper}>
				<dl className={styles.timeDisplay}>
					<dt>Time Elapsed</dt>
					<dd>{timeElapsed}</dd>
				</dl>
				<div className={styles.actions}>
					<button onClick={handlePlayPause}>
						{isPlaying ?
							<>
								<Pause/>
								<VisuallyHidden>Pause</VisuallyHidden>
							</> : <>
								<Play/>
								<VisuallyHidden>Play</VisuallyHidden>
							</>
						}
					</button>
					<button onClick={handleReset}>
						<RotateCcw/>
						<VisuallyHidden>Reset</VisuallyHidden>
					</button>
				</div>
			</div>
		</Card>
	);
}

export default CircularColorsDemo;

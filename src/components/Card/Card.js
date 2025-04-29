import clsx from 'clsx';

import styles from './Card.module.css';

const Card = ({ children, className, ...delegated }) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...delegated}>
			{children}
		</div>
	);
};

export default Card;

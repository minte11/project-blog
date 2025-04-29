import { Code } from 'bright';

import theme from './theme';
import styles from './CodeSnippet.module.css';

const CodeSnippet = (props) => {
	return (
		<Code
			{...props}
			theme={theme}
			className={styles.wrapper}
		/>
	);
};

export default CodeSnippet;

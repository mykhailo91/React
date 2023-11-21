import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, className, onClick }) => {
	return (
		<button onClick={onClick} type='button' className={styles.btnPrimary}>
			{title}
		</button>
	);
};

export default Button;

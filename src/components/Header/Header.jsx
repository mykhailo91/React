import React from 'react';
import Button from './../../common/Button/Button';
import Logo from '../Header/components/Logo/Logo';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<Logo />
			<span>Hello, {props.name}!</span>
			<Button title='Logout' />
		</header>
	);
};

export default Header;

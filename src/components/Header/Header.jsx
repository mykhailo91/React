import React from 'react';
import Button from './../../common/Button/Button';
import Logo from '../Header/components/Logo/Logo';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';
	const isRegistrationPage = location.pathname === '/registration';
	const handleLogout = () => {
		//in the nearest future will try to put here logic, sorry, new project is making me crazy:(
	};
	const { userName } = props;

	return (
		<header className={styles.header}>
			<Logo />
			{!isLoginPage && !isRegistrationPage && <span>Hello, {userName}</span>}
			{!isLoginPage && !isRegistrationPage && (
				<Button title='Logout' onClick={handleLogout} />
			)}
		</header>
	);
};

export default Header;

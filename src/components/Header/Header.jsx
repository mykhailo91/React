import Button from './../../common/Button/Button';
import styles from './Header.module.css';

const Header = (props) => {
	//const isAuthenticated = true;

	return (
		<header className={styles.header}>
			<img src='../../images/Logo.svg' alt='logo' />
			<span>Hello, {props.name}!</span>
			<Button />
			{/*<button>{isAuthenticated ? 'Logout' : 'Login'}</button>*/}
		</header>
	);
};

export default Header;

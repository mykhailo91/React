import Button from './../../common/Button/Button';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img src='../../images/Logo.svg' alt='logo' />
			<span>Hello, {props.name}!</span>
			<Button title={'Logout'} />
		</header>
	);
};

export default Header;

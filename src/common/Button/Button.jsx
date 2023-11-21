import styles from './Button.module.css';

const Button = ({ title, className }) => {
	return <button className={styles.btnPrimary}>{title}</button>;
};

export default Button;

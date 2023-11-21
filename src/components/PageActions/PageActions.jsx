import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import styles from './PageActions.module.css';

const PageActions = () => {
	return (
		<div className={styles.PageActions}>
			<div className={styles.SearchBar}>
				<Input placeholder='Input text' />
				<Button title='Search' />
			</div>
			<Button title='Add new course' />
		</div>
	);
};

export default PageActions;

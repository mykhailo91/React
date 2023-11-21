import Button from './../../common/Button/Button';
import styles from './EmptyCourseList.module.css';

const EmptyCourseList = () => {
	return (
		<section className={styles.EmptyCourseList}>
			<h2>Your list is empty</h2>
			<div>Please use ’Add New Course’ button to add your first course</div>
			<Button title={'Add new course'}></Button>
		</section>
	);
};

export default EmptyCourseList;

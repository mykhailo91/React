import Button from './../../common/Button/Button';
import styles from './Courseinfo.module.css';

const CourseInfo = ({
	title,
	description,
	id,
	duration,
	creationDate,
	authors,
}) => {
	return (
		<>
			<h3>{title}</h3>
			<div className={styles.CourseInfo}>
				<div className={styles.CourseInfoWrap}>
					<div className={styles.CourseInfoDescription}>
						<h4>Description:</h4>
						<p>{description}</p>
					</div>
					<div className={styles.CourseInfoInfo}>
						<div>
							<b>ID:</b> {id}
						</div>
						<div>
							<b>Duration:</b> {duration} minutes
						</div>
						<div>
							<b>Creation</b> Date: {creationDate}
						</div>
						<div>
							<b>Authors:</b>{' '}
							{authors ? authors.join(', ') : 'No authors available'}
						</div>
					</div>
				</div>
			</div>
			<Button title={'Back'} />
		</>
	);
};

export default CourseInfo;

import Button from './../../../../common/Button/Button';
import styles from './CourseCard.module.css';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	return (
		<div className={styles.CourseCard}>
			<h3>{title}</h3>
			<div className={styles.CourseCardWrap}>
				<div className={styles.CourseCardDescription}>
					<p>{description}</p>
				</div>
				<div className={styles.CourseCardInfo}>
					<div>
						<b>Authors:</b>{' '}
						{authors ? authors.join(', ') : 'No authors available'}
					</div>
					<div>
						<b>Duration:</b> {duration} minutes
					</div>
					<div>
						<b>Creation</b> Date: {creationDate}
					</div>
					<div className={styles.CourseCardActions}>
						<Button title={'Show course'} />
						<Button title={'A'} />
						<Button title={'B'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

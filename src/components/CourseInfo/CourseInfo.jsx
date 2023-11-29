import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './../../common/Button/Button';
import styles from './Courseinfo.module.css';

const CourseInfo = ({ courses }) => {
	const { courseId } = useParams();
	const selectedCourse = courses.find((course) => course.id === courseId);

	if (!selectedCourse) {
		return <div>Course not found</div>;
	}

	const { title, description, id, duration, creationDate, authors } =
		selectedCourse;

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
							<b>Creation Date:</b> {creationDate}
						</div>
						<div>
							<b>Authors:</b>{' '}
							{authors ? authors.join(', ') : 'No authors available'}
						</div>
					</div>
				</div>
			</div>
			<Link to='/courses'>
				<Button title={'Back'} />
			</Link>
		</>
	);
};

export default CourseInfo;

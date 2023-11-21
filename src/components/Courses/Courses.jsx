import React from 'react';
import CourseCard from './../Courses/components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import { mockedCoursesList, mockedAuthorsList } from './../../constants';
import PageActions from './../PageActions/PageActions';

const Courses = ({ onShowCourseInfo }) => {
	const hasCourses = mockedCoursesList.length > 0;

	return (
		<>
			{hasCourses && <PageActions />}
			<section className={styles.courses}>
				{hasCourses ? (
					mockedCoursesList.map((course) => (
						<CourseCard
							key={course.id}
							title={course.title}
							description={course.description}
							authors={course.authors}
							duration={course.duration}
							creationDate={course.creationDate}
							onShowCourseInfo={() => onShowCourseInfo(course.id)}
						/>
					))
				) : (
					<div>No courses available</div>
				)}
			</section>
		</>
	);
};

export default Courses;

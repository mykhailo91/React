import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CourseCard from './../Courses/components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import { mockedCoursesList } from '../../constants';
import PageActions from './../PageActions/PageActions';

const Courses = () => {
	const navigate = useNavigate();

	const hasToken = localStorage.getItem('token');

	const handleAddCourse = () => {
		navigate('/courses/add');
	};

	return (
		<>
			{hasToken && <PageActions />}
			<section className={styles.courses}>
				{hasToken ? (
					mockedCoursesList.map((course) => (
						<CourseCard
							key={course.id}
							title={course.title}
							description={course.description}
							authors={course.authors}
							duration={course.duration}
							creationDate={course.creationDate}
							onShowCourseInfo={() => navigate(`/courses/${course.id}`)}
						/>
					))
				) : (
					<div>No courses available</div>
				)}
				<button onClick={handleAddCourse}>Add New Course</button>
			</section>
		</>
	);
};

export default Courses;

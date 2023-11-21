import React from 'react';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import Button from '../../common/Button/Button';

const CoursesInfoList = ({ courseId, onBackToCourses }) => {
	const selectedCourse = mockedCoursesList.find(
		(course) => course.id === courseId
	);

	if (!selectedCourse) {
		return <div>Course not found</div>;
	}

	const authors = selectedCourse.authors.map((authorId) => {
		const author = mockedAuthorsList.find((a) => a.id === authorId);
		return author ? author.name : '';
	});

	return (
		<>
			<h3>{selectedCourse.title}</h3>
			<div>
				<div>{selectedCourse.description}</div>
				<div>
					<b>ID:</b> {selectedCourse.id}
				</div>
				<div>
					<b>Duration:</b> {selectedCourse.duration} minutes
				</div>
				<div>
					<b>Creation Date:</b> {selectedCourse.creationDate}
				</div>
				<div>
					<b>Authors:</b>{' '}
					{authors ? authors.join(', ') : 'No authors available'}
				</div>
				<Button onClick={onBackToCourses} title='Back' />
			</div>
		</>
	);
};

export default CoursesInfoList;

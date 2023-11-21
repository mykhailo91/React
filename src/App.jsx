import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfoList from './components/CoursesInfoList/CoursesInfoList';
import styles from './App.css';

function App() {
	const [showCourses, setShowCourses] = useState(true);
	const [selectedCourseId, setSelectedCourseId] = useState(null);

	const handleShowCourseInfo = (courseId) => {
		setShowCourses(false);
		setSelectedCourseId(courseId);
	};

	const handleBackToCourses = () => {
		setShowCourses(true);
		setSelectedCourseId(null);
	};

	return (
		<>
			<Header name='Mykhailo' />
			<main>
				{showCourses ? (
					<Courses onShowCourseInfo={handleShowCourseInfo} />
				) : (
					<CourseInfoList
						courseId={selectedCourseId}
						onBackToCourses={handleBackToCourses}
					/>
				)}
			</main>
		</>
	);
}

export default App;

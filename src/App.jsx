import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCourse from './components/CreateCourse/CreateCourse';
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
			<Header userName='Mykhailo' />
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
			<Registration />
			<Login />
			<CreateCourse />
			<Navigate to='/login' />
		</>
	);
}

export default App;

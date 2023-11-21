import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import styles from './App.css';
import CourseInfoList from './components/CoursesInfoList/CoursesInfoList';

function App() {
	return (
		<>
			<Header name='Mykhailo' />
			<main className={styles}>
				<Courses />
			</main>
			<CourseInfoList />
		</>
	);
}

export default App;

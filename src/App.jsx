import Header from './components/Header/Header';
import CourseCard from './components/Courses/components/CourseCard/CourseCard';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	return (
		<div>
			<Header name='Mykhailo' />
			<CourseCard />
			<EmptyCourseList />
			<Courses />
			<CourseInfo />
		</div>
	);
}

export default App;

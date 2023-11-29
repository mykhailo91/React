import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { mockedCoursesList } from './constants';

let handleShowCourseInfo;

function AddCourse() {
	return null;
}

const Root = () => (
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route
				path='/courses'
				element={<Courses onShowCourseInfo={handleShowCourseInfo} />}
			/>
			<Route path='/courses/add' element={<AddCourse />} />
			<Route
				path='/courses/:courseId'
				element={<CourseInfo courses={mockedCoursesList} />}
			/>
		</Routes>
	</Router>
);

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);

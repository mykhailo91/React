import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import PageActions from './components/PageActions/PageActions';
import styles from './App.css';

function App() {
	return (
		<>
			<Header name='Mykhailo' />
			<main className={styles}>
				<PageActions />
				<Courses />
			</main>
		</>
	);
}

export default App;

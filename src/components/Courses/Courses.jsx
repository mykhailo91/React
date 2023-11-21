import CourseCard from './../Courses/components/CourseCard/CourseCard';
import EmptyCourseList from './../EmptyCourseList/EmptyCourseList';
import styles from './Courses.module.css';
import { mockedCoursesList, mockedAuthorsList } from './../../constants';
import PageActions from './../PageActions/PageActions';

const Courses = () => {
	const hasCourses = mockedCoursesList.length > 0;

	return (
		<>
			{hasCourses && <PageActions />}
			<section className={styles.courses}>
				{hasCourses ? (
					mockedCoursesList.map((course) => {
						const authors = course.authors.map((authorId) => {
							const author = mockedAuthorsList.find((a) => a.id === authorId);
							return author ? author.name : '';
						});

						return (
							<CourseCard
								key={course.id}
								title={course.title}
								description={course.description}
								authors={authors}
								duration={course.duration}
								creationDate={course.creationDate}
							/>
						);
					})
				) : (
					<EmptyCourseList />
				)}
			</section>
		</>
	);
};

export default Courses;

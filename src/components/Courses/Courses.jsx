import CourseCard from './../Courses/components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import { mockedCoursesList, mockedAuthorsList } from './../../constants';

const Courses = ({ className }) => {
	return (
		<section className={styles.courses}>
			{mockedCoursesList.map((course) => {
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
			})}
		</section>
	);
};

export default Courses;

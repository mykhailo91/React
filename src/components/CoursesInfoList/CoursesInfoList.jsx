import CourseInfo from './../CourseInfo/CourseInfo';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

const CoursesInfoList = () => {
	return (
		<div>
			{mockedCoursesList.map((course) => {
				const authors = course.authors.map((authorId) => {
					const author = mockedAuthorsList.find((a) => a.id === authorId);
					return author ? author.name : '';
				});

				return (
					<CourseInfo
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						authors={authors}
						duration={course.duration}
						creationDate={course.creationDate}
					/>
				);
			})}
		</div>
	);
};

export default CoursesInfoList;

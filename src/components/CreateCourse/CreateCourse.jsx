import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import Textarea from './../../common/Textarea/Textarea';

const CreateCourse = ({ courses, setCourses }) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [error, setError] = useState('');

	const formatDuration = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
		const formattedMinutes =
			remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
		return `${formattedHours}:${formattedMinutes}`;
	};

	const handleCreateAuthor = () => {
		if (!authorName) {
			setError('Please provide author name.');
			return;
		}

		setCourseAuthors([...courseAuthors, { name: authorName }]);
		setAuthorName('');
		setError('');
	};

	const handleDeleteAuthor = (authorIndex) => {
		const updatedAuthors = courseAuthors.filter(
			(_, index) => index !== authorIndex
		);
		setCourseAuthors(updatedAuthors);
	};

	const handleSaveCourse = () => {
		if (!title || !description || !duration) {
			setError('Please fill in all required fields.');
			return;
		}

		const newCourse = {
			id: Math.random().toString(),
			title,
			description,
			duration: parseInt(duration, 10),
			authors: courseAuthors.map((author) => author.name),
		};

		setCourses([...courses, newCourse]);

		navigate('/courses');
	};

	return (
		<>
			<h2>Course Edit/Create Page</h2>
			<form>
				<h3>Main Info</h3>
				<label htmlFor='title'>Title</label>
				<Input
					placeholder='Input title'
					id='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor='description'>Description</label>
				<Textarea
					id='description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<h3>Duration</h3>
				<label htmlFor='duration'>Duration</label>
				<Input
					type='number'
					placeholder='Input duration'
					id='duration'
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
				/>
				<span>
					<b>{formatDuration(parseInt(duration, 10))}</b> hours
				</span>
				<h3>Authors</h3>
				<label htmlFor='authors'>Author name</label>
				<Input
					placeholder='Input author name'
					id='authors'
					value={authorName}
					onChange={(e) => setAuthorName(e.target.value)}
				/>
				<Button title='Create Author' onClick={handleCreateAuthor} />
				<h4>Authors list</h4>
				{courseAuthors.map((author, index) => (
					<div key={index}>
						<span>{author.name} + bin</span>
						<Button title='Delete' onClick={() => handleDeleteAuthor(index)} />
					</div>
				))}
				<h3>Course Authors</h3>
				<span>
					{courseAuthors.length > 0
						? courseAuthors.map((author) => author.name).join(', ')
						: 'Author list is empty'}
				</span>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<p>
					If you don't have an account you may{' '}
					<Link to='/registration'>
						<b>Registration</b>
					</Link>
				</p>
			</form>
			<Link to='/courses'>
				<Button title='Cancel' />
			</Link>
			<Button title='Create course' onClick={handleSaveCourse} />
		</>
	);
};

export default CreateCourse;

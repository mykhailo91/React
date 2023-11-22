import React from 'react';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import Textarea from './../../common/Textarea/Textarea';

const CreateCourse = () => {
	return (
		<>
			<h2>Course Edit/Create Page</h2>
			<form>
				<h3>Main Info</h3>
				<label htmlFor='title'>Title</label>
				<Input placeholder='Input email' id='title' />
				<label htmlFor='title'>Description</label>
				<Textarea id='description' />
				<h3>Duration</h3>
				<label htmlFor='duration'>Duration</label>
				<Input placeholder='Input duration' id='duration' />
				<span>
					<b>00.00</b> hours
				</span>
				<h3>Authors</h3>
				<label htmlFor='authors'>Author name</label>
				<Input placeholder='Input authors' id='authors' />
				<Button title='Create Author' />
				<h4>Authors list</h4>
				<span>Author One + bin(going to be array)</span>
				<span>Author Two + bin(going to be array)</span>
				<h3>Course Authors</h3>
				<span>Author list is empty</span>
				<p>
					If you dont have an account you may <b>Registration</b>
				</p>
			</form>
			<Button title='Cancel' />
			<Button title='Create course' />
		</>
	);
};

export default CreateCourse;

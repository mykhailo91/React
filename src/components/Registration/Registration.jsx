import React from 'react';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';

const Registration = () => {
	return (
		<>
			<h2>Registration</h2>
			<form>
				<label htmlFor='name'>Name</label>
				<Input placeholder='Input name' id='name' />
				<label htmlFor='email'>Email</label>
				<Input placeholder='Input email' id='email' />
				<label htmlFor='password'>Password</label>
				<Input placeholder='Input password' id='password' />
				<Button title='Login' />
				<p>
					If you dont have an account you may <b>Login</b>
				</p>
			</form>
		</>
	);
};

export default Registration;

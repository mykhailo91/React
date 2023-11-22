import React from 'react';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';

const Login = () => {
	return (
		<>
			<h2>Login</h2>
			<form>
				<label htmlFor='email'>Email</label>
				<Input placeholder='Input email' id='email' />
				<label htmlFor='password'>Password</label>
				<Input placeholder='Input password' id='password' />
				<Button title='Login' />
				<p>
					If you dont have an account you may <b>Registration</b>
				</p>
			</form>
		</>
	);
};

export default Login;

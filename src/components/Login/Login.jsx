import React, { useState } from 'react';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		if (!email || !password) {
			setError('Please fill in all fields.');
			return;
		}
		setError('');
	};

	return (
		<>
			<h2>Login</h2>
			<form>
				<label htmlFor='email'>Email</label>
				<Input
					type='text'
					placeholder='Input email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='password'>Password</label>
				<Input
					type='password'
					placeholder='Input password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<Button title='Login' onClick={handleLogin} />
				<p>
					If you don't have an account you may{' '}
					<Link to='/registration'>
						<b>Register</b>
					</Link>
				</p>
			</form>
		</>
	);
};

export default Login;

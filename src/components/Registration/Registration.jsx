import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleRegister = () => {
		if (!name || !email || !password) {
			setError('Please fill in all fields.');
			return;
		}
		setError('');
	};

	return (
		<>
			<h2>Registration</h2>
			<form>
				<label htmlFor='name'>Name</label>
				<Input
					type='text'
					placeholder='Input name'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
				<Button title='Register' onClick={handleRegister} />
				<p>
					If you already have an account, you may{' '}
					<Link to='/login'>
						<b>Login</b>
					</Link>
				</p>
			</form>
		</>
	);
};

export default Registration;

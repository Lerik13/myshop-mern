import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';

//const LoginScreen = ({ location }) => {
const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch()

	const userRegister = useSelector(state => state.userRegister)
	const { loading, error, userInfo } = userRegister

	const location = useLocation()
	const redirect = location.search ? location.search.split('=')[1] : '/'

	const navigate = useNavigate()

	useEffect(() => {
		if (userInfo) {
			navigate(redirect)
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault()
		
		if (password !== confirmPassword) {
			setMessage('Password do not match')
		} else {
			dispatch(register(name, email, password))
		}
	}

	return <FormContainer>
		<h1>Sign Up</h1>
		{message && <Message variant='danger'>{message}</Message>}
		{error && <Message variant='danger'>{error}</Message>}
		{loading && <Loader />}
		<Form onSubmit={submitHandler}>
			<Form.Group controlId='name'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='name'
					placeholder='Enter name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Form.Group controlId='email'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Form.Group controlId='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Enter password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></Form.Control>
			</Form.Group>
			<Form.Group controlId='confirmPassword'>
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Confirm password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Button type='submit' variant='primary' className='my-3'>
				Register
			</Button>

			<Row className='py-3'>
				<Col>
					Have an account? {' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Login
					</Link>
				</Col>
			</Row>
		</Form>

	</FormContainer>
}

export default RegisterScreen
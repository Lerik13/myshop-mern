import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { saveShippingAddress } from '../actions/cartActions';


const ShippingScreen = () => {
	const cart = useSelector(state => state.cart)
	const { shippingAddress } = cart

	const [address, setAddress] = useState(shippingAddress?.address);
	const [city, setCity] = useState(shippingAddress?.city);
	const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
	const [country, setCountry] = useState(shippingAddress?.country);

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(saveShippingAddress({ address, city, postalCode, country }))
		navigate('/payment')
	}

	return <FormContainer>
		<h1>Shipping</h1>
		<Form onSubmit={submitHandler}>
			<Form.Group controlId='address'>
				<Form.Label>Address</Form.Label>
				<Form.Control
					type='address'
					placeholder='Enter address'
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Form.Group controlId='city'>
				<Form.Label>city</Form.Label>
				<Form.Control
					type='city'
					placeholder='Enter city'
					value={city}
					onChange={(e) => setCity(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Form.Group controlId='postalCode'>
				<Form.Label>postalCode</Form.Label>
				<Form.Control
					type='postalCode'
					placeholder='Enter postalCode'
					value={postalCode}
					onChange={(e) => setPostalCode(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Form.Group controlId='country'>
				<Form.Label>country</Form.Label>
				<Form.Control
					type='country'
					placeholder='Enter country'
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				></Form.Control>
			</Form.Group>

			<Button type='submit' variant='primary' className='my-3'>
				Continue
			</Button>
		</Form>
	</FormContainer>
}

export default ShippingScreen
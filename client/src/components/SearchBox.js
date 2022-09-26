import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
	const [keyword, setKeyword] = useState('');
	let navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			navigate(`/search/${keyword}`)
		} else {
			navigate('/')
		}
	}

	return (
		<Form onSubmit={submitHandler} className='d-flex'>
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search Product...'
				className='mr-sm-2 ml-sm-5'
			></Form.Control>
			<Button type='submit' variant='online-success' className='p-2'>Search</Button>

		</Form>
	)
}

export default SearchBox
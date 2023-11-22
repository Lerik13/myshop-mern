import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
	const navigate = useNavigate();
	const { keyword: urlKeyword } = useParams();
	const [keyword, setKeyword] = useState(urlKeyword || '');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			setKeyword('');
			navigate(`search/${keyword}`);
		} else {
			navigate('/');
		}
	}

	return (
		<Form onSubmit={ submitHandler } className="d-flex">
			<Form.Control
				type='text'
				name='q'
				placeholder='search your gift...'
				className='mr-sm-2 ml-sm-5'
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<Button type='submit' variant='' className='p-2 mx-2'>
				<FaSearch />
			</Button>
		</Form>
	)
}

export default SearchBox
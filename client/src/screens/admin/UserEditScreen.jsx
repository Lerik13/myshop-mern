import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../slices/usersApiSlice';

const UserEditScreen = () => {
	const { userInfo } = useSelector((state) => state.auth)

	const { id: userId } = useParams();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	
	const {
		data: user,
		isLoading,
		refetch,
		error
	} = useGetUserDetailsQuery(userId);

	const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await updateUser({ userId, name, email, isAdmin });
			toast.success('User updated successfully');
			refetch();
			navigate('/admin/userlist');
		} catch (err) {
			toast.error(err?.data?.message || err.error)
		}
	}

	useEffect(() => {
		if (user) {
			setName(user.name)
			setEmail(user.email)
			setIsAdmin(user.isAdmin)
		}
	}, [user]);

	return (<>
		<Link to="/admin/userlist" className='btn btn-light my-3'>
			Go Back
		</Link>
		<FormContainer>
			<h1>Edit User</h1>

			{loadingUpdate && <Loader />}

			{isLoading ? <Loader /> : (
				error ? (
					<Message variant='danger'>{error.data.message}</Message>
				) : (
					<Form onSubmit={ submitHandler }>
						<Form.Group controlId='name' className='my-2'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId='email' className='my-2'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>


						<Form.Group controlId='isAdmin' className='my-2'>
							<Form.Check
								type='checkbox'
								label='Is Admin'
								checked={isAdmin}
								disabled={userInfo && (userInfo._id === userId)}
								onChange={(e) => setIsAdmin(e.target.checked)}
							/>
						</Form.Group>

						<Button type='submit' variant='primary' className='my-2'>
							Update
						</Button>
					</Form>
				)
			)}

		</FormContainer>
	</>)
}

export default UserEditScreen
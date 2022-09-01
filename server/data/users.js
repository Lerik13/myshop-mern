import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'admin',
		email: 'admin@myshop.com',
		password: bcrypt.hashSync('12345', 10),
		isAdmin: true
	},
	{
		name: 'lera',
		email: 'lera@myshop.com',
		password: bcrypt.hashSync('12345', 10),
	},
	{
		name: 'user',
		email: 'user@myshop.com',
		password: bcrypt.hashSync('12345', 10),
	},
]

export default users
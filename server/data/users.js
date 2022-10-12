import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'admin',
		email: 'admin@gift-shop.ca',
		password: bcrypt.hashSync('12345', 10),
		isAdmin: true
	},
	{
		name: 'lera',
		email: 'lera@gift-shop.ca',
		password: bcrypt.hashSync('12345', 10),
	},
	{
		name: 'user',
		email: 'user@gift-shop.ca',
		password: bcrypt.hashSync('12345', 10),
	},
]

export default users
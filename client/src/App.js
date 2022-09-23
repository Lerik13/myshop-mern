//import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';


const App = () => {
	const [clientID, setClientID] = useState(''); //PayPal

	useEffect(() => {
		const getClientId = async () => {
			const { data: clientId } = await axios.get('/api/config/paypal');
		
			setClientID(clientId);
		};
	 
		if (!window.paypal) {
			getClientId();
		}
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<main className='py-3'>
				<Container>
				{clientID && (
					<PayPalScriptProvider options={{ 'client-id': clientID }}>

						<Routes>
							<Route path='/login' element={<LoginScreen />} />
							<Route path='/register' element={<RegisterScreen />} />
							<Route path='/profile' element={<ProfileScreen />} />
							<Route path='/product/:id' element={<ProductScreen />} />
							<Route path="/cart" element={<CartScreen />}>
								<Route path=":productId" element={<CartScreen />} />
							</Route>
							<Route path='/shipping' element={<ShippingScreen />} />
							<Route path='/payment' element={<PaymentScreen />} />
							<Route path='/placeorder' element={<PlaceOrderScreen />} />
							<Route path='/order/:id' element={<OrderScreen />} />
							<Route path='/admin/userlist' element={<UserListScreen />} />
							<Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
							<Route path='/admin/productlist' element={<ProductListScreen />} />
							<Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
							<Route path='/admin/orderlist' element={<OrderListScreen />} />
							<Route path='/' element={<HomeScreen />} />
						</Routes>

					</PayPalScriptProvider>
				)}
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App;

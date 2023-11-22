import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/admin/UserListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserEditScreen from './screens/admin/UserEditScreen';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/page/:pageNumber" element={<HomeScreen />} />
			<Route path="/search/:keyword" element={<HomeScreen />} />
			<Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} />
			<Route path="/product/:id" element={<ProductScreen />} />
			<Route path="/login" element={<LoginScreen />} />
			<Route path="/register" element={<RegisterScreen />} />
			<Route path="/cart" element={<CartScreen />} />

			<Route path='' element={<PrivateRoute />}>
				<Route path="/profile" element={<ProfileScreen />} />
			</Route>

			<Route path='' element={<AdminRoute />}>
				<Route path="/admin/productlist" element={<ProductListScreen />} />
				<Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />} />
				<Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
				<Route path="/admin/userlist" element={<UserListScreen />} />
				<Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
			</Route>
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);

reportWebVitals();
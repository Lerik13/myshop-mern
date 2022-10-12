import React from 'react'
import {Helmet} from "react-helmet";

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'Welcome to Gift-Shop',
	description: 'We offer the unique products for reasonable price',
	keywords: 'gift, gifts, beauty, products, unique products'
}
export default Meta
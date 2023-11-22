import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: "gift-Shop",
	description: "We sell the best gift products for cheap",
	keywords: "gift products, cheap gifts, best deals",
}

export default Meta
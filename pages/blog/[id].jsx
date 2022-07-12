import Layout from '../../components/Layout/Layout'
const SingelPost = ({ post }) => {
	return (
		<Layout>
			<h1>{post.title}</h1>
			<p>{post.description}</p>
		</Layout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const data = await fetch(`https://fakestoreapi.com/products/${query.id}`)
	const post = await data.json()

	return {
		props: { post },
	}
}

export default SingelPost

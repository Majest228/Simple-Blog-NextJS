import BlogItem from '../components/BlogItem/BlogItem'
import Layout from '../components/Layout/Layout'

export default function Home({ posts }) {
	return (
		<Layout>
			<h1>Мой блог</h1>
			<div className='posts'>
				{posts.map(post => (
					<BlogItem
						title={post.title}
						description={post.description}
						id={post.id}
						key={post.id}
					/>
				))}
			</div>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const data = await fetch('https://fakestoreapi.com/products')
	const posts = await data.json()

	return {
		props: { posts },
	}
}

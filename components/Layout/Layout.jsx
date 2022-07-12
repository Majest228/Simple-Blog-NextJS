import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title, description = '', children }) => {
	return (
		<>
			<Head>
				<title>Simple Blog On NextJS</title>
				<meta
					name='description'
					content={description || 'Простой блог на NextJS'}
				/>
				<meta
					property='og:description'
					content={description || 'Простой блог на NextJS'}
				/>
			</Head>
			<header>
				<img src='/favicon.ico' alt='' />
				<Link href='/'>
					<a>Главная</a>
				</Link>
			</header>
			<div className='container'>{children}</div>
			<footer>2022 &copy; Simple Blog On NextJS</footer>
		</>
	)
}

export default Layout

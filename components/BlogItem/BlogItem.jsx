import styles from './BlogItem.module.scss'
import Link from 'next/link'

const BlogItem = ({ title, description, id }) => {
	return (
		<div className={styles.item}>
			<h5>{title}</h5>
			<p>{description}</p>
			<Link href='/blog/[id]' as={`/blog/${id}`}>
				<a>Прочитать</a>
			</Link>
		</div>
	)
}

export default BlogItem

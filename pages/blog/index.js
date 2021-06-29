import BlogCard from '../../components/BlogCard';
import BlogHeader from '../../components/BlogHeader';
import BlogAside from '../../components/BlogAside';
import blog from '../../styles/Blog.module.css';
import fetch from 'isomorphic-fetch';
import { useRouter } from 'next/router';

import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	Button,
	Typography,
	Grid,
} from '@material-ui/core';

const BlogList = ({ posts }) => {
	const router = useRouter();
	console.log(posts);
	return (
		<>
			<section
				style={{
					padding: '1rem 2rem 0 7rem',
					background: '#f8f8f8',
					width: '100vw',
				}}
				className={blog.blogMain}
			>
				<Grid container spacing={5} className={blog.cards}>
					{posts?.map((post) => {
						return (
							<Grid key={post._id} item xs={4}>
								<BlogCard post={post} />
							</Grid>
						);
					})}
				</Grid>
				<BlogAside />
			</section>
		</>
	);
};

export const getStaticProps = async (ctx) => {
	const response = await fetch(
		'https://irfan-akhan.github.io/shuttlelane/api/posts',
		{
			method: 'GET',
			headers: {
				// update with your user-agent
				'User-Agent':
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
				Accept: 'application/json; charset=UTF-8',
			},
		}
	);
	const { data } = await response.json();
	console.log(data);
	return {
		props: {
			posts: data,
		},
	};
};

export default BlogList;

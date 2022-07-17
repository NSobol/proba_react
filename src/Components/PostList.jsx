/* eslint-disable react/prop-types */
import PostItem from "./PostItem.jsx";

function PostList(props) {
	const {posts, title} = props;
	return (
		<div>
			<h1>{title}</h1>
			{posts.map((post, index) => <PostItem number={index + 1} post={post} key={post.id} />)}
		</div>
	);
}

export default PostList;
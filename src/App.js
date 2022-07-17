import './styles/App.css';
import {
	useState
} from 'react';
import PostList from './Components/PostList.jsx';
import MyButton from './Components/UI/button/MyButton.jsx';
import MyInput from './Components/UI/input/MyInput.jsx';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", body: "Description" },
		{ id: 2, title: "JavaScript 2", body: "Description" },
		{ id: 3, title: "JavaScript 3", body: "Description" }
	]);

	const [post, setPost] = useState({title:'', body:''});


	// eslint-disable-next-line no-lone-blocks
	{/* const bodyInputRef = useRef() */}

	function addNewPost(e) {
		e.preventDefault();
		setPosts([...posts, {...post, id: Date.now()}]);
		setPost({title:'', body:''})
	}

	return (
		<div className="app">
			<form>
				{/* Управляемый компонент */}

				<MyInput
					type="text"
					placeholder='название поста'
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
				/>
				
				<MyInput
					type="text"
					placeholder='описание поста'
					value={post.body}
					onChange={e => setPost({...post, body: e.target.value})}
				/>
				
				{/* Неуправляемый/Неконтролируемый компонент */}
				{/* <MyInput
					type="text"
					placeholder='описание поста'
					ref={bodyInputRef}/> 
				*/}
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
		<PostList posts={posts} title={"Список постов"} />
	</div>
	);
}

export default App;
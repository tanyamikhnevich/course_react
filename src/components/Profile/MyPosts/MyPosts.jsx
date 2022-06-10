import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post massage={p.massage} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div>
        <div>
            My post
        </div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick={onAddPost}>Add post</button>
        <div>
            New post
        </div>
        {postElements}
    </div>
}

export default MyPosts;
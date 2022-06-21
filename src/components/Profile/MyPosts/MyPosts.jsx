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
        <div className={styles.divMyPost}>
            My post
        </div>
        <div className={styles.postsTextarea}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button className={styles.postButton} onClick={onAddPost}>Add post</button>
        <div className={styles.divNewPost}>
            New post
        </div>
        {postElements}
    </div>
}

export default MyPosts;
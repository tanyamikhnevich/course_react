import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {AddPostFormRedux} from "./PostForm";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post massage={p.massage} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return <div>
        <div className={styles.divMyPost}>
            My post
        </div>
        <AddPostFormRedux onSubmit={addNewPost}/>
        {postElements}
    </div>
}

export default MyPosts;
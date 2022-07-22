import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";
import { AddPostFormRedux } from "./PostForm";
import {PostsType} from "../../../Types/types";


export type AddPostFormValuesType = {
    newPostBody: string
}

export type MapPropsType = {
    posts: Array<PostsType>,
}

export type DispatchPropsType = {
    addPost: (newPostBody: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
  let postElements = props.posts.map((p) => (
    <Post key={p.id} massage={p.massage} likesCount={p.likesCount} />
  ));

  let addNewPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div>
      <div className={styles.divMyPost}>My post</div>
      <AddPostFormRedux onSubmit={addNewPost} />
      {postElements}
    </div>
  );
};

const MyPostMemorized = React.memo(MyPosts)
export default MyPostMemorized;

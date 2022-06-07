import styles from './Post.module.css';

const Post = (props) => {
    return <div className={styles.postDiv}>
        <div className={styles.imgPostDiv}>
            <img className={styles.imgPost} src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'/>
        </div>
        <div className={styles.massage}>
            {props.massage}
            </div>
        <div>
            like - {props.like}
        </div>

    </div>
}

export default Post;
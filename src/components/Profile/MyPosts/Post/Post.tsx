import styles from './Post.module.css';
import * as React from "react";

type PropsType = {
    massage: string,
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return <div className={styles.postDiv}>
        <div className={styles.imgPostDiv}>
            <img className={styles.imgPost} src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'/>
        </div>
        <div className={styles.massage}>
            {props.massage}
            </div>
        <div>
            like - {props.likesCount}
        </div>

    </div>
}

export default Post;
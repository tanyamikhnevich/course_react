import styles from './Wallpaper.module.css';
import * as React from "react";


const Wallpaper: React.FC = () => {
    return <div className={styles.contentImgDiv}>
            <img className={styles.wallpaperimg}
                src='https://c0.wallpaperflare.com/preview/916/504/900/lavander-flowers.jpg'/>
        </div>
}

export default Wallpaper;
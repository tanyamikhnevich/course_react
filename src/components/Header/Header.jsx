import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerImgDiv}>
            <img className={styles.headerImg}
                src='https://d.newsweek.com/en/full/1984441/cat-hissing.jpg?w=1600&h=900&q=88&f=a8fb4a1840e933f4fad59682cd58a34e'/>
        </div>
        <div className={styles.pDiv}>
            <h1 className={styles.titleText}>MeowChat</h1>
        </div>
    </header>
}

export default Header;
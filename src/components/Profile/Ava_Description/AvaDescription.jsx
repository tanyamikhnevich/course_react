import styles from './AvaDescription.module.css';

const avaDescription = () => {
    return (
        <div className={styles.avaDescriptionDiv}>
        <div className={styles.divAva}>
            <img className={styles.imgAva}
                 src='https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg'/>
        </div>
        <div className={styles.textareaDiv}>
            <h2 className={styles.nameAva}>KissaZaya</h2>
        <textarea className={styles.description} placeholder='Description'/>
        </div>
    </div>
    )
}

export default avaDescription;
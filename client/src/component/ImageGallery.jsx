import React from 'react';
import styles from '../styles/imageGallery.css';

const ImageGallery = (props) => {
    return(
        <div className={styles.container} onClick={props.onClick}>
            <div className={styles.main}>
                <img src={props.imageData[0].photo_url}/>
            </div>
            <div className={styles.topLeft}>
                <img src={props.imageData[1].photo_url}/>
            </div>
            <div className={styles.bottomLeft}>
                <img src={props.imageData[2].photo_url}/>
            </div>
            <div className={styles.topRight}>
                <img src={props.imageData[3].photo_url}/>
            </div>
            <div className={styles.bottomRight}>
                <img src={props.imageData[4].photo_url}/>
            </div>
        </div>
    )
}

export default ImageGallery;
import { useState, useEffect } from 'react';
import profileStyles from './ProfileCard.module.css';
import styles from '../ProfileSearchInput/ProfileSearchInput.module.css';


const ProfileCard = () => {
    return (
        <>
            <div className={profileStyles.cardContainer}>
                <img className={profileStyles.profileImage} src='' alt="" />

                <div className={profileStyles.titleAndTextContainer}>
                    <h2 className={profileStyles.profileTitle}></h2>
                    <p className={profileStyles.profileDescription}></p>
                </div>

                <input className={styles.lupaBuscaUsuario} type="submit" value=""/>
            </div>
        </>
    )
}


export default ProfileCard;
import { useState, useEffect } from 'react';
import profileStyles from './ProfileCard.module.css';
import styles from '../ProfileSearchInput/ProfileSearchInput.module.css';


const ProfileCard = ({ user }) => {
    if (!user) return null;

    return (
        <>
            <div className={profileStyles.cardContainer}>
                <img className={profileStyles.profileImage} src={user.avatar_url} alt="" />

                <div className={profileStyles.titleAndTextContainer}>
                    <h2 className={profileStyles.profileTitle}>{user.name}</h2>
                    <p className={profileStyles.profileDescription}>{user.bio}</p>
                </div>

                <input className={styles.lupaBuscaUsuario} type="submit" value=""/>
            </div>
        </>
    )
}


export default ProfileCard;
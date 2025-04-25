import { useState } from 'react';

import styles from './HomeScreen.module.css';
import GitHub from '../../assets/images/GitHub.png';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileSearch from '../ProfileSearchInput/ProfileSearchInput';
import ErrorCard from '../ErrorCard/ErrorCard';

const HomeScreen = () => {
    const [userData, setUserData] = useState('');
    const [error, setError] = useState('');

    const fetchUserData = async (username) => {
        try {
            setUserData('');
            setError('');

            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) throw new Error('Perfil não econtrado');
            const data = await response.json();

            setUserData(data);

          } catch (err) {
            if (err.message === 'Perfil não econtrado') {
              setError('Perfil não econtrado');
            } else {
              setError('Outro conteúdo');
            }
          }
      };

    return (
        <>
            <div className={styles.pageContainer}>
                <img className={styles.github} src={GitHub} alt="Imagem com logomarca e nome do GitHub" />

                <ProfileSearch onSearch={fetchUserData}/>
                {error === 'Perfil não econtrado' && <ErrorCard />}
                {userData && <ProfileCard user={userData} />}
            </div>
        </>
    )
}

export default HomeScreen;
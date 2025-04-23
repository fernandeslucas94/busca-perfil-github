import styles from './HomeScreen.module.css';
import GitHub from '../../assets/images/GitHub.png';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileSearch from '../ProfileSearchInput/ProfileSearchInput';

const HomeScreen = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <img className={styles.github} src={GitHub} alt="Imagem com logomarca e nome do GitHub" />

                <ProfileSearch />
                <ProfileCard />
            </div>
        </>
    )
}

export default HomeScreen;
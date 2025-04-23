import { useState, useEffect } from 'react';
import styles from './ProfileSearchInput.module.css';

const ProfileSearch = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/fernandeslucas94')
        .then(response => response.json())
        .then(data => setData(data))
        .then(error => console.error(error))
    },[]);

    return (
        <>
            <form action="">
                    <input className={styles.buscaUsuario} type="text" placeholder="Digite um usuário do GitHub"/>
                    <input className={styles.lupaBuscaUsuario} type="submit" value="" />
            </form>
        </>
    )
}

export default ProfileSearch;
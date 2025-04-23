import { useState, useEffect } from 'react';
import styles from './ProfileSearchInput.module.css';

const ProfileSearch = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onSearch(inputValue)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                    <input className={styles.buscaUsuario} type="text" placeholder="Digite um usuário do GitHub" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={styles.lupaBuscaUsuario} type="submit" value=""></button>
            </form>
        </>
    )
}

export default ProfileSearch;
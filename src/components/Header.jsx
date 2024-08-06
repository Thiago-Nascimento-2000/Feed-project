import styles from './Header.module.css'

import ignitelogo from '../assets/logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <h1>Ignite Feed</h1>
            <img src={ignitelogo} alt="Logotipo do Ignite"></img>
        </header>
    );
}
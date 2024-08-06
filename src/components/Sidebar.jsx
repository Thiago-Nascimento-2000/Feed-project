import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://coolwallpapers.me/th700/6032325-style-snowboards-paints-patterns-sports-snowboard.jpg"></img>

            <div className={styles.profile}>
                <Avatar src="https://i.pinimg.com/736x/f4/3c/50/f43c5078e82a5628295917dd1bb35f7d.jpg" ></Avatar>

                <strong>Thiago Nascimento</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}></PencilLine>
                    Editar seu Perfil
                </a>
            </footer>

        </aside>
    );
}
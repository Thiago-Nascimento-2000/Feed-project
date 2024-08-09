import { Trash, TrendUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Avatar>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Nascimento</strong>
                            <time title='14 de Julho as 08:13' datetime="2024-05-11 20:02:14">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}></Trash>
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button
                        onClick={handleLikeComment}>
                        <TrendUp></TrendUp>
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            
        </div>
    );
}
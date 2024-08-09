import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './components/App.module.css'

import './components/global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/f4/3c/50/f43c5078e82a5628295917dd1bb35f7d.jpg',
      name: 'Thiago Nascimento',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio! 🥳' },
      { type: 'link', content: 'thiagohks.dev/rules' },
      { type: 'space', content: ' '},
    ],
    publishedAt: new Date('2024-07-14 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://w0.peakpx.com/wallpaper/469/148/HD-wallpaper-fullstack-development-nodejs-programmer-technology.jpg',
      name: 'Julia Yumi',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeit no meu portifolio!' },
      { type: 'paragraph', content: 'thiagohks.dev/rules' }
    ],
    publishedAt: new Date('2024-07-14 19:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

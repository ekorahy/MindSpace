import { createRoot } from 'react-dom/client';

import './styles/index.css'

const helloMindSpace = <h1 className='font-bold text-indigo-400'>Hello, MindSpace!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(helloMindSpace);

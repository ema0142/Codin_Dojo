import './App.css';
import { useState } from 'react';
import Bouton from './components/Bouton'; 
import Lista from './components/Lista'; 

function App() {
  const [posts, setPosts] = useState(""); 

  return (
    <div className="App">
      <Bouton setPost={setPosts} /> 
      <Lista posts={posts} /> 
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import Button from "./components/Button";
import phrases from './data/phrases.json';
import Animes from "./components/Animes";

function App() {

  const [index, setIndex] = useState(0);
  const [Stado, setStado] = useState(false)
  const [Anime, setAnime] = useState(false)
  const outIndex = (index) => {
    setIndex(index)
  }
  

  return (
    <>
      <div className=" flex flex-col justify-center items-center w-[100%] h-screen">
        
        {
          Anime && <Animes />
        }
        
        
        {
          Stado ? <Message phrase = {phrases[index]} />: ' '
        }
        
        <Button setAnime={setAnime} setStado={setStado} outIndex = { outIndex } phrase = {phrases.length}  />
      </div>
    </>
  );
}

export default App;

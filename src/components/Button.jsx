import { useState } from "react";

const Button = ({ outIndex, phrase,setStado,setAnime }) => {

    const images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif", "9.gif", "10.gif","11.gif", "12.gif", "13.gif","14.gif","15.gif" ];

    const [img, setImg] = useState(0)

    const handleClick = () => {
        setTimeout(()=> {
          setStado(false)
          setAnime(true)
        },1000)
        setTimeout(()=>{
          setAnime(false)
          setStado(true)
        },2600)
      setTimeout(() =>{
        const newIndex = Math.floor(Math.random() * phrase);
        outIndex(newIndex)
        setImg(newIndex);
      },2500 )
      

      
        
    }
    document.body.style = `background: url("./imagenes/${images[img]}");
                           background-position:center ;
                           background-size: cover;
                           background-repeat: no-repeat`
  return (
    <div className="font-extrabold text-lg translate-y-5">
      <button className="bg-gradient-to-r from-[#ff6b77] to-[#43fc50] py-1 px-2 rounded-full shadow-[0px_0px_15px_15px_#f8e406] hover:from-[#061af8] hover:to-[#f86b06] hover:shadow-[0px_0px_15px_15px_#061af8] transition duration-[900ms] ease-in-ou" onClick={ handleClick } ><i className="fa-solid px-0"></i>SueñaConmigoAquí</button>
      
    </div>
  );
};

export default Button;

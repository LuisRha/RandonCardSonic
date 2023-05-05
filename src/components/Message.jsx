import message  from "../components/Message.css"

const Message = ({phrase}) => {
  return (
    
   <>
    <div className=" w-[350px]  h-[350px] font-prue bg-[rgba(0,0,0,0.9)] font-extrabold text-[25px] flex flex-col justify-around rounded-xl  text-[white] shadow-[0px_0px_7px_2px_#777575] hover:scale-105  transition duration-[900ms] ease-in-ou cursor-pointer " >
        <p className="text-center px-5 ">{phrase.phrase}</p>
        <p className="text-center ">{phrase.author}</p>
    </div>
     </>
  )
}

export default Message
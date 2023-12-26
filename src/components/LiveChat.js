import { useEffect, useState } from "react"
import LiveMessage from "./LiveMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/redux/chatSlice"
import { generateRandomName, makeRandomMessage } from "../utils/helper"

const LiveChat = () => {
  const dispatch=useDispatch()
  const [liveMessage, setLiveMessage]=useState('')

  const chatMessage=useSelector(store=>store.chat.messages)

  useEffect(()=>{
    const msg=setInterval(()=>{
      dispatch(addMessage(
        {
          name: generateRandomName(),
          message: makeRandomMessage(30),
        }
      ))
    }, 2000);

    return ()=>clearInterval(msg)
  },[])

  return (
    <>
      <div className="ml-6 mr-10 bg-gray-100 h-[435px] rounded-t-lg p-2 overflow-y-scroll">    
        <h1 className="text-2xl font-bold ml-6 mt-2 border-b-2 pb-3">Live Chat</h1>
        <div className=" flex flex-col-reverse">
          {chatMessage.map((msg, index)=>(
            <LiveMessage key={index} name={msg.name} message={msg.message}/>
          ))}
        </div>
      </div>

      <form className="flex" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage(
          {
            name: 'You',
            message: liveMessage,
          },
        setLiveMessage("")
        ))
      }} >
        <input 
          type="text" 
          placeholder="Type your message here" 
          className="ml-6 mr-10 w-full h-10 rounded-b-lg p-2 bg-gray-100 focus:outline-none"
          value={liveMessage}
          onChange={(e)=>setLiveMessage(e.target.value)}
        />
        <button className="bg-red-500 text-white px-2 py-1 h-10 rounded-b-lg absolute right-10">Send</button>
     </form>
   </>
  )
}

export default LiveChat
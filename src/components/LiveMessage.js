import { USER_ICON } from "../utils/constants"

const LiveMessage = ({name, message}) => {
  return (
    
    <div className="flex items-center">
        <img src={USER_ICON} alt="user-icon" className='w-7 h-7 m-2 ' />
        <span className="font-bold mr-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveMessage
import { useDispatch } from 'react-redux'
import { MENU_IMG, USER_ICON, YT_LOGO, YT_SEARCH_API } from '../utils/constants'
import { toggleMenu } from '../utils/redux/appSlice'
import { useEffect, useState } from 'react'

const Header = () => {
  const [searchSuggestion,setSearchSuggetion]=useState('')

  const dispatch=useDispatch()

  const handleMenu=()=>{
    dispatch(toggleMenu())
  }

  const getSuggestions=async()=>{
    const data=await fetch(YT_SEARCH_API+searchSuggestion)
    const jsonData=await data.json()
    console.log(jsonData)
  }

  useEffect(()=>{
    const timer=setTimeout(()=>getSuggestions(),200)
    return ()=>clearTimeout(timer)
  }, [searchSuggestion])

  return (
    <div className='flex justify-between shadow-lg'>
        <div className='flex col-span-1'>
            <img src={MENU_IMG} alt="menu-icon" className='w-8 h-8 mx-4 my-7 cursor-pointer'onClick={handleMenu} />  
            <img src={YT_LOGO} alt="yt-logo" className='w-[160px] h-[90px]' />
        </div>

        <div className='flex'>
            <input type="search" placeholder="Search" className='border my-7 border-black rounded-l-full p-1 w-96 h-12' value={searchSuggestion} onChange={(e)=>setSearchSuggetion(e.target.value)} />
            <button className='border border-black my-7 rounded-r-full py-2 px-4 bg-gray-200 text-xl'>🔍</button>
        </div>

        <div className='flex col-span-1'>
            <img src={USER_ICON} alt="user-icon" className='w-12 h-12 mx-5 my-7 ' />
        </div>
    </div>
  )
}

export default Header

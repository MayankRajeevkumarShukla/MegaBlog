import React, { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import authservice from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
function App() {
  // # aise tab aayega jab hum react app use karenge vite-react kae liye alag hota hai
  // console.log(process.env.REACT_APP_APPWRITE_URL); 
  // console.log(import.meta.env.VITE_APPWRITE_URL); 
  const [loading,setLoading] = useState(true) 
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
   .then((userData)=>{
       if(userData){
        dispatch(login({userData}))
       }else{
        dispatch(logout())
       }
   })
    .finally(()=>setLoading(false))
  },[])
  // conditonal redring kiya hai yahapae agar true hoga toh hi render hoga varna nai hoga

   return !loading ? (
    <div className='min-h-screen flex flex-wrap  content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
         <main>
          {/* <Outlet/> */}
         </main>
        <Footer/>
      </div>
    </div>
   ) : null
}

export default App;

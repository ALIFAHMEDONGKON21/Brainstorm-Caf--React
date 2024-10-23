import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/heeder/header'
function App() {

  const [bookmarks ,setbookmarks]=useState([]);


  const handlemark=blog=>
  {
    console.log('clcick')
  }

  return (
    <>
      
    <Header></Header>
    <div className='md:flex  w-11/12 mx-auto mt-5'>
    <Blogs handlemark={handlemark}></Blogs>
    <Bookmarks></Bookmarks>

    </div>
    
     
    </>
  )
}

export default App

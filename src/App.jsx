import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/heeder/header'
function App() {

  const [bookmarks ,setbookmarks]=useState([]);

  const [readingtime ,setreadingtime]=useState(0)


  const handlemarkread= time=>{
    console.log('click mark read',time)

    const convertingtime=parseInt(time)

    const newreading= parseInt(readingtime+convertingtime) 
    setreadingtime(newreading)
  }


  const handlemark=blog=>
  {
    const newbooks=[...bookmarks,blog]
    setbookmarks(newbooks);
  }

  return (
    <>
      
    <Header></Header>
    <div className='md:flex  w-11/12 mx-auto mt-5'>
    <Blogs handlemark={handlemark}
           handlemarkread={handlemarkread}
    ></Blogs>
    <Bookmarks bookmarks={bookmarks}
               handlemarkread={readingtime}
    ></Bookmarks>

    </div>
    
     
    </>
  )
}

export default App

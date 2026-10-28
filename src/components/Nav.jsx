import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


function Nav(props) {

  const[isOpen,setIsOpen] = useState(false);

  return (
    <>
    <nav className={`bg-gray-700 flex justify-between items-center p-5 h-14 sticky top-0 z-50`}>
      <div id='logo'className='text-orange-600'>{props.title}</div>
      <ul className='flex gap-6 text-gray-400'>

        <button onClick={()=>setIsOpen(!isOpen)}
          className='flex flex-col justify-between w-6 h-5  bg-transparent border-none cursor-pointer focus:outline-none z-50 md:hidden'
          aria-label='Toggle menu'
        >
          <div className={`w-full h-0.5 bg-gray-400 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2':''}`}></div>
          <div className={`w-full h-0.5 bg-gray-400 rounded transition-all duration-300 ${isOpen ? 'opacity-0':''}`}></div>
          <div className={`w-full h-0.5 bg-gray-400 rounded transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-2.5':''}`}></div>
        </button>

        <div className={`absolute top-0 left-35 right-0 h-screen bg-[#FFFDD0] shadow-md p-5 flex flex-col gap-4 z-40 transition-all duration-300
          md:static md:flex md:flex-row md:shadow-none md:p-0 md:h-full md:bg-gray-700 md:items-center md:gap-6 ${isOpen ? 'flex' : 'hidden'}
          `}>
         <Link onClick={()=> setIsOpen(false)} className='hover:text-orange-400' to='/'>Home</Link>
         <Link onClick={()=> setIsOpen(false)} className='hover:text-orange-400' to='/tool'>Tools</Link>
         <Link onClick={()=> setIsOpen(false)} className='hover:text-orange-400' to='/about'>About</Link>

        </div>
  
      </ul>
    </nav>
  
    </>
  )
}

// Nav.propTypes= {title:PropTypes.string,
//     about:PropTypes.string
// }

// Nav.defaultProps = {
//     title:'Set title here',
//     about:'About text here'
// };

export default Nav

import React from 'react'
// import PropTypes from 'prop-types'


function Nav(props) {
  return (
    <>
    <nav className=' bg-gray-800 flex justify-between items-center p-5'>
      <div id='logo'className='text-orange-600'>{props.title}</div>
      <ul className='flex gap-6 text-gray-400'>
        <a href="#" className='hover:text-orange-400'>Home</a>
        <a href="#" className='hover:text-orange-400'>About</a>
        <a href="#" className='hover:text-orange-400'>Contect</a>
        <a href="#" className='hover:text-orange-400'>Services</a>
        
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

import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


function Nav(props) {
  return (
    <>
    <nav className={`navbar-${props.mode} bg-${props.mode} bg-gray-700 flex justify-between items-center p-5 h-14 sticky top-0 z-50`}>
      <div id='logo'className='text-orange-600'>{props.title}</div>
      <ul className='flex gap-6 text-gray-400'>
        
         <Link className='hover:text-orange-400' to='/'>Home</Link>
         <Link className='hover:text-orange-400' to='/tool'>Tools</Link>
         <Link className='hover:text-orange-400' to='/about'>About</Link>
         {/* <div className='form-check form-switch'>
          <input className='form-check-input ' type="checkbox" id='checkboxbtn'/>
          <label className='form-check-label' for="checkboxbtn">Enable Dark mode</label>
         </div> */}
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

import React from 'react'
import Search from './Search'

const Header = ({name}) => {
  return (
    <div >
         <h1 className='text-2xl md:text-4xl xl:text-4xl '>{name}</h1>
             <Search></Search>
    </div>
  )
}

export default Header
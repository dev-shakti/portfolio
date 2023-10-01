import React from 'react'

const MenuItems = ({ onClick, href, children }) => {
  return (
    <li className='py-5 text-4xl'>
    <a onClick={onClick} href={href} className='hover:font-bold'>
      {children}
    </a>
  </li>
  )
}

export default MenuItems

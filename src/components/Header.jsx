import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center p-4 justify-between gap-4 ">
    <h1 className='font-medium'>
      Free
      <span className="text-blue-400 bold">Scribe</span>
    </h1>
    <button className="flex items-center gap-2">
      <p>New</p>
      <i className="fa-solid fa-plus"></i>
    </button>
  </header>
  )
}

export default Header
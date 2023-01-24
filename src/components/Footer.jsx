import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer'> Aman Swarnakar&nbsp;&copy;&nbsp;{date}</div>
  )
}

export default Footer
import React from 'react'
import Github from '../assets/github.svg?react'

function Footer() {
  return (
    <footer className='footer'>
      Copyright © 2025 ZackCornfield
      <a href='https://github.com/ZackCornfield' target='_blank' rel='noreferrer'>
        <Github className='icon' />
      </a>
    </footer>
  )
}

export default Footer
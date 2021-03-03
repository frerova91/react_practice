import React from 'react'
import { Styles } from './styles'
import { FaTwitterSquare, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Social = () => {
  return (
    <Styles>
      <a aria-label='Twitter' href='https://twitter.com/Frerova'><FaTwitterSquare size='2em' /></a>
      <a aria-label='Linkedin' href='https://www.linkedin.com/in/freddyJoseRojasValera'><FaLinkedin size='2em' /></a>
      <a aria-label='Mailto' href='mailto:frerova91@tutanota.com'><FaEnvelope size='2em' /></a>
      <a aria-label='Github' href='https://github.com/frerova91'><FaGithub size='2em' /></a>
    </Styles>
  )
}

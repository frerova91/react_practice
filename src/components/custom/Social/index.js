import React from 'react'
import { Styles } from './styles'
import { FaTwitterSquare, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Social = () => {
  return (
    <Styles>
      <a href='https://twitter.com/Frerova'><FaTwitterSquare size='2em' /></a>
      <a href='https://www.linkedin.com/in/freddyJoseRojasValera'><FaLinkedin size='2em' /></a>
      <a href='mailto:frerova91@tutanota.com'><FaEnvelope size='2em' /></a>
      <a href='https://github.com/frerova91'><FaGithub size='2em' /></a>
    </Styles>
  )
}

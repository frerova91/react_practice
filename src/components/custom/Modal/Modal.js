import React from 'react'
import { MyModal } from './styles'

export const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (selectedImg !== null || undefined) {
      setSelectedImg(null)
    }
  }
  // console.log(selectedImg)
  return (

    <MyModal
      onClick={() => handleClick()}
    >
      <img
        src={`${selectedImg}`} alt='enlarged pic'
      />
    </MyModal>
  )
}

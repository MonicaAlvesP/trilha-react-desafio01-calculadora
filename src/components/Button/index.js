import React from 'react'
import { ButtonContainer } from '../../Styles/_styleButton'

export const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type='button'>
      {label}
    </ButtonContainer>
  )
}

import React from 'react'
import { InputContainer } from '../../Styles/_styleInput'

export const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  )
}

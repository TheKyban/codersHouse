import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepAvatar = ({onNext}) => {
  return (
    <div>StepAvatar
    <Button onClick={onNext} text={"Next"} />

    </div>
  )
}

export default StepAvatar
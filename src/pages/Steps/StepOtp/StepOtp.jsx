import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepOtp = ({onNext}) => {
  return (
    <div>StepOtp
    <Button onClick={onNext} text={"Next"} />
    </div>
  )
}

export default StepOtp
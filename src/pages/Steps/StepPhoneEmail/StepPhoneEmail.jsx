import React from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import phoneIcon from '../../../images/telephone.png'

const StepPhoneEmail = ({onNext}) => {
  return (
    <div>
        <Card img={phoneIcon} heading={"Enter Your Phone Number"}>

        <Button onClick={onNext} text={"Next"} />
        </Card>
    </div>
  )
}

export default StepPhoneEmail
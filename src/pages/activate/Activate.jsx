import React, { useState } from 'react'


import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUsername from '../Steps/StepUsername/StepUsername'

const steps = {
    1: StepName,
    2: StepAvatar,
    3: StepUsername
}

const Activate = () => {
    const [step, setStep] = useState(1)
    
    const onNext = () => {
        setStep(step + 1)
    }
    const Step = steps[step]
    return (
        <div>
            Activate
            <Step onNext={onNext} />
        </div>
    )
}

export default Activate
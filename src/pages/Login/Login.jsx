import React, { useState } from 'react'

import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}
const Login = () => {
    const [step, setStep] = useState(1)
    const onNext = () => setStep(2)
    const Step = steps[step]
    return (
        <div>Login
            <Step onNext={onNext} />
        </div>
    )
}

export default Login
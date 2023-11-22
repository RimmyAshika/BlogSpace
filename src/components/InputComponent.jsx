import React, { useId, useState } from 'react';

const InputComponent = React.forwardRef(function Input(
    { label, type = 'text', className = '', icon,pass1, pass2, ...props },
    ref
) {
    const id = useId();
    const [eyeopen , setEyeOpen] = useState(false)
    return (
    <div className='relative w-[100%] mb-4'>
        <i className={`${icon} absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2`}></i>
        <input
        className={`p-2 bg-grey rounded-md pl-12 outline-none`} type={type === 'password' ? eyeopen ? 'text' : 'password' : type} placeholder="Signup"
        // value={val}
        ref={ref}
        {...props}
        id={id}
        />
        {type === 'password' ? <i onClick={() => setEyeOpen(!eyeopen)} className={`${eyeopen ? 'fi fi-rr-eye' : 'fi fi-rr-eye-crossed'} absolute right-[15%] cursor-pointer top-1/2 -translate-y-1/2 `} ></i> : <></>}
    </div>
  )
}
);
export default InputComponent
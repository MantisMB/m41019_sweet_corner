import React from 'react'

const CustomInput = props => {
    const { autoComplete = 'off', input, meta, placeholder, className, type = 'text' } = props;
 
    // console.log(props)

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <input
                {...input} 
                className={className}
                placeholder={placeholder}
                type={type} 
                autoComplete={autoComplete} 
            />
            <div className="dangererror">{hasError}</div>
        </div>
    );
 }
 
 export default CustomInput
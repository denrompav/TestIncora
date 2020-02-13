import React from 'react'
import classes from './FormsControls.module.css'
import { Field } from 'redux-form'


const FormControl = ({ input, meta, child, element, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea className = {classes.textarea} {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input className = {classes.input} {...input} {...restProps}></input></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, type, text = '') => {
    return <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            type={type} />
            {text}
    </div>
}
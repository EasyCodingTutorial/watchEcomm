import React from 'react'

import styles from './InputBox.module.css'

interface InputBoxProps {
    labelText: string,
    Id: string,
    InputType: string,
    value: string,
    fieldValidation?: string,
    disabaled?: boolean,
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = (
    {
        labelText,
        Id,
        InputType,
        value,
        onchange,
        fieldValidation,
        disabaled
    }: InputBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={Id}>{labelText}</label>
            <span className={styles.star}>★</span>
            {
                fieldValidation && (
                    <span className={styles.ErrorMessage}>
                        {fieldValidation}
                    </span>
                )
            }

            <br />
            <input
                type={InputType}
                disabled={disabaled}
                id={Id}
                value={value}
                onChange={onchange}
                className={
                    fieldValidation ? styles.InputError : ''
                }
            />
        </div>
    )
}



// For Textarea Box

interface TextareaBoxProps {
    labelText: string,
    Id: string,
    value: string,
    fieldValidation?: string,
    onchange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaBox = (
    {
        labelText,
        Id,
        value,
        fieldValidation,
        onchange
    }: TextareaBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={Id}>{labelText}</label>
            <span className={styles.star}>★</span>
            {
                fieldValidation && (
                    <span className={styles.ErrorMessage}>
                        {fieldValidation}
                    </span>
                )
            }

            <br />
            <textarea
                id={Id}
                value={value}
                onChange={onchange}
                className={
                    fieldValidation ? styles.InputError : ''
                }
            />
        </div>
    )
}


interface DropdownBoxProps {
    labelText: string,
    Id: string,
    value: string,
    fieldValidation?: string,
    options: { value: string, label: string }[],
    onchange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// For Dropdown
export const DropDownbox = (
    {
        labelText,
        Id,
        value,
        fieldValidation,
        options,
        onchange
    }: DropdownBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={Id}>{labelText}</label>
            <span className={styles.star}>★</span>
            {
                fieldValidation && (
                    <span className={styles.ErrorMessage}>
                        {fieldValidation}
                    </span>
                )
            }

            <br />
            <select
                id={Id}
                value={value}
                onChange={onchange}
                className={
                    fieldValidation ? styles.InputError : ''
                }
            >

                <option value="">Select an Option</option>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }

            </select>
        </div>
    )
}

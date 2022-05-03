import React, { useState } from 'react';

interface RadioProps {

  showIcon?: boolean;
  size: 'sm' | 'base' | 'lg';
  label?: string;
  isDisabled?: boolean;
  defaultChecked?: boolean,
  onClick?: () => void;


}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  showIcon = true,
  size,
  label,
  defaultChecked,
  isDisabled,
  ...props
}: RadioProps) => {
    let disabled = isDisabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'

    let inp_css = `appearance-none checked:border-4 rounded-full border-2 border-gray-200 dark:border-gray-600
                  bg-white dark:bg-neutral-900 checked:bg-white checked:border-blue-600 dark:checked:bg-neutral-900 dark:checked:border-blue-600 m-1 focus:outline-none 
                  transition duration-200 float-left align-top mr-2 cursor-pointer`

    let label_css = `dark:text-white text-black text-${size}  align-top`
    if (size === 'sm') {
      inp_css = inp_css.concat(' h-3 w-3 ')
    }
    else if (size === 'base') {
      inp_css = inp_css.concat(' h-4 w-4 ')
    }
    else if (size === 'lg') {
      inp_css = inp_css.concat(' h-5 w-5 ')
    }
    if (isDisabled) {
      inp_css = inp_css.concat(' opacity-75 cursor-not-allowed')
      label_css = label_css.concat(' opacity-75 cursor-not-allowed')
    }
    return (
      <div>
        <label>
          <input type="radio" disabled={isDisabled} checked={defaultChecked} className={inp_css} id={label} /> 
          <span aria-disabled={isDisabled} className={label_css}>{label}</span>
        </label>
      </div>
  );
};


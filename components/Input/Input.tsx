import React, { useState } from 'react';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  
  /**
   * How large should the button be?
   */
  size: 'xs' | 'sm' | 'base' | 'lg';
  type: 'Filled' | 'Outlined' | 'Standard';




  /**
   * Button contents
   */
  /**
   * Optional click handler
   */
  isDisabled: boolean;

  // textColor?: string;
  // darkTextColor?: string;

  // backgroundColor?: string;
  // darkBackgroundColor?: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  type = 'Outlined',
  size = 'base',
  isDisabled = false,
  ...props
}: InputProps) => {
    let css: string = "";

    if (type === 'Outlined') {
        if (isDisabled) {
          css = `form-control
          text-${size}
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-100 bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-not-allowed`;
        }
        else{
        css = `form-control
        text-${size}
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none read only`;
        }
      };

      if (type === 'Filled') {
        if (isDisabled) {
          css = `form-control
          text-${size}
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-100 bg-clip-padding
          rounded
          transition
          ease-in-out
          m-0  read only cursor-not-allowed focus:outline-none`;
        }
        else{
        css = `form-control
        text-${size}
        w-full
        block
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-gray-100 bg-clip-padding
        rounded
        filled
        m-0
        focus:text-gray-700 focus:border-blue-800 focus:outline-none read only bg-gray-100 bg-clip-padding
        `;
        }
      };

      if (type === 'Standard') {
        if (isDisabled) {
          css = `form-control
          text-${size}
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          rounded
          transition
          ease-in-out
          m-0  read only cursor-not-allowed focus:outline-none`;
        }
        else{
        css = `form-control
        text-${size}
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        rounded
        transition
        ease-in-out
        m-0  read only focus:outline-none`;
        }
      };



      

      
    

    return (
        <div className="flex justify-center">
        <div className="mb-3 xl:w-90">
          <label className="form-label inline-block mb-2">Example label</label>
          <input
            type="input"
            className={css}
            placeholder="Example label"
            disabled = {isDisabled}

          />
        </div>
      </div>
  );
};


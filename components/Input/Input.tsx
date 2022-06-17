import React, { useState } from 'react';

interface InputProps {
  size: 'xs' | 'sm' | 'base' | 'lg';
  type: 'Filled' | 'Outlined' | 'Standard';
  isDisabled: boolean;
  title?: any;
  placeholder?: any;
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
  title = 'Example label',
  placeholder = 'Example placeholder',
  isDisabled = false,
  ...props
}: InputProps) => {
  let css: string = '';

  if (type === 'Outlined') {
    if (isDisabled) {
      css = `form-control
          text-${size}
          block
          w-100
          px-3
          py-1.5
          font-normal
          text-gray-700
          bg-gray-100 bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-not-allowed`;
    } else {
      css = `form-control
        text-${size}
        block
        w-100
        px-3
        py-1.5
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
  }

  if (type === 'Filled') {
    if (isDisabled) {
      css = `form-control
          text-${size}
          block
          w-100
          px-3
          py-1.5
          font-normal
          text-gray-700
          bg-gray-100 bg-clip-padding
          rounded
          transition
          ease-in-out
          m-0  read only cursor-not-allowed focus:outline-none`;
    } else {
      css = `form-control
        text-${size}
        w-100
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
  }

  if (type === 'Standard') {
    if (isDisabled) {
      css = `form-control
          text-${size}
          px-3
          py-1.5
          font-normal
          text-gray-700
          rounded
          transition
          ease-in-out
          m-0  read only cursor-not-allowed focus:outline-none`;
    } else {
      css = `form-control
        text-${size}
        px-3
        py-1.5
        font-normal
        text-gray-700
        rounded
        transition
        ease-in-out
        m-0  read only focus:outline-none`;
    }
  }

  return (
    <div className="mb-3 xl:w-90">
      <label className={`form-label text-${size} inline-block mb-2`}>
        {title}
      </label>
      <input
        type="input"
        className={css}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </div>
  );
};

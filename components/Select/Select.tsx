import React, { useState } from 'react';

interface SelectProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * How large should the button be?
   */
  size: 'xs' | 'sm' | 'base' | 'lg';
  type: 'Filled' | 'Outlined';

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
export const Select = ({
  type = 'Outlined',
  size = 'base',
  isDisabled = false,
  ...props
}: SelectProps) => {
  let css: string = '';

  if (type === 'Outlined') {
    if (isDisabled) {
      css = `form-select appearance-none
          block
          w-100
          px-3
          py-1.5
          text-${size}
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-blue-300
          rounded
          transition
          ease-in-out
          m-0
          hover:bg-grey-100
          focus:text-gray-700 focus:bg-grey-100 focus:border-blue-800 focus:outline-none cursor-not-allowed`;
    } else {
      css = `form-select appearance-none
        block
        w-100
        px-3
        py-1.5
        text-${size}
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-blue-300
        rounded
        transition
        ease-in-out
        m-0
        hover:bg-grey-100
        focus:text-gray-700 focus:bg-grey-100 focus:border-blue-800 focus:outline-none`;
    }
  }

  if (type === 'Filled') {
    if (isDisabled) {
      css = `form-select appearance-none
          block
          w-100
          px-3
          py-1.5
          text-${size}
          font-normal
          text-gray-700
          bg-blue-100 bg-clip-padding
          border-left-width: 0px
          border-right-width: 0px
          border-top-width: 0px
          border-bottom-width: 2px border-blue-300
          rounded
          transition
          ease-in-out
          m-0
          hover:bg-grey-100
          focus:text-gray-700 focus:bg-grey-100 focus:border-blue-800 focus:outline-none cursor-not-allowed`;
    } else {
      css = `form-select appearance-none
        block
        w-100
        px-3
        py-1.5
        text-${size}
        font-normal
        text-gray-700
        bg-blue-100 bg-clip-padding
        border-left-width: 0px
        border-right-width: 0px
        border-top-width: 0px
        border-bottom-width: 0px
        rounded
        transition
        ease-in-out
        m-0
        hover:bg-grey-100
        focus:text-gray-700 focus:bg-grey-100 focus:border-blue-800 focus:outline-none`;
    }
  }

  return (
    <div className="mb-3 xl:w-96">
      <select className={css} disabled={isDisabled}>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

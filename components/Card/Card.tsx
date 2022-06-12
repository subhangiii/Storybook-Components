import React, { useState } from 'react';

interface CardProps {
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
export const Card = ({
  type = 'Outlined',
  size = 'base',
  isDisabled = false,
  ...props
}: CardProps) => {
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
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className={"text-gray-900 text-xl leding-tight font-medium mb-2"}>Card title</h5>
    <p className="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
</div>
  );
};


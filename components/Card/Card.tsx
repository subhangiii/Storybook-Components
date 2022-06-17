import React, { useState } from 'react';

interface CardProps {
  size: 'xs' | 'sm' | 'base' | 'lg';
  isDisabled: boolean;
  title?: any;
  content?: any;
  button?: any;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  size = 'base',
  isDisabled = false,
  title = 'Card Title',
  content = "Some quick example text to build on the card title and make up the bulk of the card's content.",
  button = 'Button',
  ...props
}: CardProps) => {
  let css: string = '';
  if (isDisabled) {
    css = `form-control
          text-${size}
          block
          w-full
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
        w-full
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

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5
        className={`text-gray-900 text-${size} leding-tight font-medium mb-2`}
      >
        {title}
      </h5>
      <p className={`text-gray-700 text-${size} mb-4`}>{content}</p>
      <button
        type="button"
        className={` inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-${size} leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
      >
        {button}
      </button>
    </div>
  );
};

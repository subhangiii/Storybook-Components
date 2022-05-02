import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: 'primary' | 'outline' | 'link';
  
  /**
   * How large should the button be?
   */
  size: 'xs' | 'sm' | 'base' | 'lg';
  /**
   * Button contents
   */
  label: string;
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
export const Button = ({
  type = 'primary',
  size = 'base',
  label = "Button",
  isDisabled = false,
  ...props
}: ButtonProps) => {
  let css: string = "";

  if (type === 'primary') {
    css = ` text-${size} px-5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800`;
  }
  if (type === 'outline') {
    css = ` text-${size} px-5 py-2.5 text-center text-blue-700 bg-blue-500 bg-opacity-0 hover:bg-gray-100 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md dark:text-blue-500 dark:border-blue-500 dark:focus:ring-opacity-0 dark:hover:bg-blue-500 dark:hover:bg-opacity-5`;
  }
  if (type === 'link') {
    css = `text-${size} px-5 py-2.5 text-center text-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:bg-opacity-5 dark:focus:ring-blue-800`;
  }
    if (isDisabled) {
      css = `text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-md text-${size} px-5 py-2.5 text-center`;
    }

    return (
    <button
      type="button"
      className={css}
      disabled = {isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};


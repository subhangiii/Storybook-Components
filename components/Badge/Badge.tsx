import React, { useState } from 'react';

interface BadgeProps {
  size: 'xs' | 'sm' | 'base' | 'lg';
  type: 'Default' | 'Larger' | 'Icon' | 'IconOnly';
  title?: any;
  color:
    | 'blue'
    | 'gray'
    | 'red'
    | 'green'
    | 'yellow'
    | 'indigo'
    | 'purple'
    | 'pink';

  onClick?: () => void;
}

export const Badge = ({
  type = 'Default',
  size = 'base',
  color = 'blue',
  title = 'Badge',
  ...props
}: BadgeProps) => {
  let sizeCss = '';
  if (size == 'base') {
    sizeCss = 'w-8 h-8';
  } else if (size == 'sm') {
    sizeCss = 'w-4 h-4';
  } else if (size == 'lg') {
    sizeCss = 'w-10 h-10';
  } else if (size == 'xs') {
    sizeCss = 'w-2 h-2';
  }
  if (type === 'Default') {
    return (
      <div>
        <span
          className={`bg-${color}-100 text-${color}-800 text-${size} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-800`}
        >
          {title}
        </span>
      </div>
    );
  }

  if (type === 'Icon') {
    return (
      <div>
        <span
          className={`bg-${color}-100 text-${color}-800 text-${size} font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-${color}-700 dark:text-${color}-300`}
        >
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {title}
        </span>
      </div>
    );
  }
  if (type === 'IconOnly') {
    return (
      <div>
        <span
          className={`inline-flex items-center p-1 mr-2 text-${size} font-semibold text-${color}-800 bg-${color}-100 rounded-full dark:bg-${color}-700 dark:text-${color}-300`}
        >
          <svg
            className={`${sizeCss}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    );
  }
};

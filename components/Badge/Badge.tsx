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

  let colorCss = '';
  if (color == 'blue') {
    colorCss =
      'bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800';
  } else if (color == 'gray') {
    colorCss =
      'bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300';
  } else if (color == 'red') {
    colorCss =
      'bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900';
  } else if (color == 'green') {
    colorCss =
      'bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900';
  } else if (color == 'yellow') {
    colorCss =
      'bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900';
  } else if (color == 'indigo') {
    colorCss =
      'bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900';
  } else if (color == 'purple') {
    colorCss =
      'bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900';
  } else if (color == 'pink') {
    colorCss =
      'bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900';
  }

  if (type === 'Default') {
    return (
      <div>
        <span
          className={`bg-${color}-100 text-${color}-800 text-${size} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-900'`}
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

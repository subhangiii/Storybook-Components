import React, { useState } from 'react';
import { Switch } from '@headlessui/react'

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
export const SwitchComp = ({
  type = 'primary',
  size = 'base',
  label = "Button",
  isDisabled = false,
  ...props
}: ButtonProps) => {

  const [enabled, setEnabled] = useState(false) 
    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-600' : 'bg-gray-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
  );
};


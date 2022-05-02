import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react'

interface RadioProps {

  showIcon: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled: boolean;
  onClick?: () => void;

}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  showIcon = true,
  size = 'md',
  isDisabled = false,
  ...props
}: RadioProps) => {
    const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]
    const [selected, setSelected] = useState('startup')
    let disabled = isDisabled ? 'cursor-not-allowed' : ''

    return (
     
      <div className={`max-w-${size}`}>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-blue-500 ring-opacity-60 bg-blue-100 dark:text-white duration-300 dark:bg-blue-500' 
                      : 'dark:bg-blue-700 dark:text-white'
                  }
                    focus:outline-none relative flex cursor-pointer rounded-md px-5 py-4 shadow-md ${disabled}`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline`}
                          >
                              {plan.ram}/{plan.cpus} 
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {showIcon && ( <svg
                          className={`h-5 w-5 dark:text-white text-blue-500 ${
                            active ? 'opacity-100 duration-300' : 'opacity-0'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>)
                        }
                     

                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    
  );
};


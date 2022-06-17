import React from 'react';
import { Button } from '../Button/Button';

interface ModalProps {
  visible?: boolean;
  title?: any;
  data: any;
  footer?: any;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  children: any;

  onClick?: () => void;
  handleCancel?: () => void;
  handleOK?: () => void;
}

export const ModalComp = ({
  visible = true,
  title = 'hello',
  footer,
  children,
  size = 'base',
  handleCancel,
  handleOK,
  ...props
}: ModalProps) => {
  if (footer === undefined) {
    footer = [
      <Button type="outline" label="Return" />,
      <Button onClick={handleOK} label="Submit" />,
    ];
  }
  let sizeCss = '';
  if (size == 'base') {
    sizeCss = 'max-w-lg';
  } else if (size == 'sm') {
    sizeCss = 'max-w-md';
  } else if (size == 'lg') {
    sizeCss = 'max-w-4xl';
  } else if (size == 'xl') {
    sizeCss = 'max-w-7xl';
  }
  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          !visible && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className={`relative p-4 w-full ${sizeCss} h-full md:h-auto`}>
          <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-neutral-700">
              {typeof title == 'string' ? (
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              ) : (
                title
              )}
              <button
                type="button"
                onClick={handleCancel}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">{children}</div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-neutral-700">
              {footer.map((item: any) => {
                return item;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

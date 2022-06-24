import React, { useEffect, useState } from 'react';
import { Popover } from '@headlessui/react';
import 'flowbite';
interface TableProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * How large should the button be?
   */
  size: 'sm' | 'base' | 'lg';
  dataSource: Array<any>;
  columns: Array<{
    title: string;
    dataIndex: string;
    key: string;
    sorter?: any;
    sortDirections?: ['ascend'] | ['descend'] | ['ascend', 'descend'];
    defaultSortOrder?: 'ascend' | 'descend';
    render?: any | undefined;
    filters?: Array<{ text: string; value: string }>;
  }>;
  render?: any;
  title: Array<string>;
  type: 'primary' | 'striped';
  // textColor?: string;
  // darkTextColor?: string;
  // backgroundColor?: string;
  // darkBackgroundColor?: string;
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Table = ({
  dataSource,
  title,
  type,
  columns,
  ...props
}: TableProps) => {
  const intialData = dataSource.slice();
  const [data, setdata] = useState(intialData); // DOESNT WORK WHEN RETURNING TO ORIGINAL LIST
  const [sortDir, setSortDir] = useState({ key: -1, direction: '' });
  const [selectedFilters, setSelectedFilters] = useState(dataSource.slice()[0]);
  useEffect(() => {
    let temp = { ...dataSource[0] };
    delete temp['key'];
    for (let key in temp) {
      temp[key] = [];
    }
    setSelectedFilters(temp);
    console.log(selectedFilters);
  }, []);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  let style = '';
  if (type === 'striped') {
    style =
      'odd:bg-white even:bg-gray-50 odd:dark:bg-neutral-800 even:dark:bg-neutral-700';
  }
  const handleSort = (column: any, index: number) => {
    if (!column.sortDirections) {
      column.sortDirections = ['ascend', 'descend'];
    }
    let sorted = data.sort(column.sorter);
    let tempSortDir = { key: index, direction: sortDir.direction };
    if (sortDir.key === index) {
      if (column.sortDirections.length === 2) {
        if (sortDir.direction === 'ascend') {
          setdata(sorted.reverse());
          tempSortDir.direction = 'descend';
        } else if (sortDir.direction === 'descend') {
          setdata(dataSource);
          tempSortDir.direction = '';
        } else {
          setdata(sorted);
          tempSortDir.direction = 'ascend';
        }
      } else if (column.sortDirections.length === 1) {
        if (sortDir.direction === '') {
          if (column.sortDirections[0] === 'ascend') {
            setdata(sorted);
            tempSortDir.direction = 'ascend';
          } else {
            setdata(sorted.reverse());
            tempSortDir.direction = 'descend';
          }
        }
      }
    } else {
      if (column.sortDirections[0] === 'ascend') {
        setdata(sorted);
        tempSortDir.direction = 'ascend';
      } else {
        setdata(sorted.reverse());
        tempSortDir.direction = 'descend';
      }
    }

    setSortDir(tempSortDir);
  };
  const handleCheckedClick = (e: any) => {
    console.log(e.target);
  };
  const handleFilterClick = (e: any) => {
    console.log(e);
    let temp = { ...selectedFilters };
    let key = e.target.id.split('-')[0];
    let value = e.target.id.split('-')[1];
    if (temp[key].includes(value)) {
      temp[key] = temp[key].filter((item: string) => item !== value);
    } else {
      temp[key].push(value);
    }
    setSelectedFilters(temp);
  };

  const handleFilterOK = () => {
    let temp = dataSource.filter((item: any) => {
      for (let key in selectedFilters) {
        if (selectedFilters[key].length > 0) {
          if (!selectedFilters[key].includes(item[key])) {
            return false;
          }
        }
      }
      return true;
    });
    setdata(temp);
  };

  /*const MyPopover = (props: any) => {
    return (
      <Popover className="relative">
        <Popover.Button>{FilterSvg({ enable: false })}</Popover.Button>

        <Popover.Panel className="absolute z-10 bg-gray-300">
          {props.filters.map((filter: { text: string; value: string }) => (
            <div
              onClick={handleFilterClick}
              className="flex items-center py-2 px-4 "
            >
              <input
                id={`${props.column}-${filter.value}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "
              />
              <label
                id={`${props.column}-${filter.value}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {filter.text}
              </label>
            </div>
          ))}
          <div className="flow-root py-4">
            <Popover.Button className="text-sm float-left ml-3 px-3 py-1.5 text-center text-blue-700 bg-blue-500 bg-opacity-0 hover:bg-gray-100 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md dark:text-blue-500 dark:border-blue-500 dark:focus:ring-opacity-0 dark:hover:bg-blue-500 dark:hover:bg-opacity-5">
              Reset
            </Popover.Button>
            <Popover.Button
              onClick={handleFilterOK}
              className="text-sm float-right mr-3 px-3 py-1.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
            >
              OK
            </Popover.Button>
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
    );
  };*/

  const MyPopover = (props: any) => {
    return (
      <Popover className="relative z-40">
        <Popover.Button>{FilterSvg({ enable: false })}</Popover.Button>

        <Popover.Panel className="absolute bg-gray-100">
          {props.filters.map((filter: { text: string; value: string }) => (
            <div
              onClick={handleFilterClick}
              className="flex items-center py-4 px-10 "
            >
              <input
                id={`${props.column}-${filter.value}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "
              />
              <label
                id={`${props.column}-${filter.value}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {filter.text}
              </label>
            </div>
          ))}
          <div className="flow-root py-4">
            <Popover.Button className="text-sm float-left ml-3 px-3 py-1.5 text-center text-blue-700 bg-blue-500 bg-opacity-0 hover:bg-gray-100 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md dark:text-blue-500 dark:border-blue-500 dark:focus:ring-opacity-0 dark:hover:bg-blue-500 dark:hover:bg-opacity-5">
              Reset
            </Popover.Button>
            <Popover.Button
              onClick={handleFilterOK}
              className="text-sm float-right mr-3 px-3 py-1.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
            >
              OK
            </Popover.Button>
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
    );
  };

  /*const FilterPopOver = (props: any) => {
    return (
      <>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown">
          {FilterSvg({ enable: false })}
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          {props.filters.map((filter: { text: string; value: string }) => (
            <div
              onClick={handleFilterClick}
              className="flex items-center py-2 px-4 "
            >
              <input
                id={`${props.column}-${filter.value}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "
              />
              <label
                id={`${props.column}-${filter.value}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {filter.text}
              </label>
            </div>
          ))}
          <div className="flow-root py-4">
            <button className="text-sm float-left ml-3 px-3 py-1.5 text-center text-blue-700 bg-blue-500 bg-opacity-0 hover:bg-gray-100 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md dark:text-blue-500 dark:border-blue-500 dark:focus:ring-opacity-0 dark:hover:bg-blue-500 dark:hover:bg-opacity-5">
              Reset
            </button>
            <button
              onClick={handleFilterOK}
              className="text-sm float-right mr-3 px-3 py-1.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
            >
              OK
            </button>
          </div>
        </div>
      </>
    );
  };*/
  const FilterSvg = (props: { enable: boolean }) => {
    return (
      <svg
        fill="#bfbfbf"
        className={`w-4 h-4 hover:fill-slate-400 ${
          props.enable === true && 'fill-blue-500'
        }`}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M90,22.292c0-3.508-2.781-6.359-6.258-6.488v-0.012H16.848v0.018c-0.116-0.006-0.231-0.018-0.348-0.018
              c-3.59,0-6.5,2.91-6.5,6.5c0,2.045,0.946,3.867,2.423,5.059l30.14,30.139l-0.001,18.599v0.154h0.015
              c0.054,1.204,0.727,2.236,1.713,2.8l-0.009,0.016l7.872,4.545c0.066,0.046,0.139,0.079,0.208,0.12l0.028,0.016l0-0.001
              c0.502,0.29,1.078,0.469,1.7,0.469c1.887,0,3.417-1.529,3.416-3.416c0-0.09-0.02-0.175-0.026-0.263h0.026l0-23.011l30.417-30.416
              l-0.03-0.03C89.185,25.884,90,24.185,90,22.292z M32.249,28.792h0.014l0.001,0.015L32.249,28.792z"
          />
        </g>
      </svg>
    );
  };
  const SortAscendingSvg = (props: { enable: boolean }) => {
    return (
      <svg
        fill="#bfbfbf"
        className={`w-2 h-2 block ${props.enable === true && 'fill-blue-500'}`}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="96.154px"
        height="96.154px"
        viewBox="0 0 96.154 96.154"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(1, 0, 0, -1.004054, 0, 96.348175)">
          <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z" />
        </g>
      </svg>
    );
  };
  const SortDescendingSvg = (props: { enable: boolean }) => {
    return (
      <svg
        fill="#bfbfbf"
        className={`w-2 h-2 block ${props.enable === true && 'fill-blue-500'}`}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="96.154px"
        height="96.154px"
        viewBox="0 0 96.154 96.154"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z" />
        </g>
      </svg>
    );
  };

  const RenderSorter = (props: { column: any; index: number }) => {
    if (props.column.sortDirections) {
      if (props.column.sortDirections.length === 2) {
        return (
          <>
            <SortAscendingSvg
              enable={
                sortDir.key === props.index && sortDir.direction === 'ascend'
                  ? true
                  : false
              }
            />
            <SortDescendingSvg
              enable={
                sortDir.key === props.index && sortDir.direction === 'descend'
                  ? true
                  : false
              }
            />
          </>
        );
      } else if (props.column.sortDirections[0] === 'ascend') {
        return (
          <SortAscendingSvg
            enable={
              sortDir.key === props.index && sortDir.direction === 'ascend'
                ? true
                : false
            }
          />
        );
      } else if (props.column.sortDirections[0] === 'descend') {
        return (
          <>
            <div className={`w-2 h-2 block`} />
            <SortDescendingSvg
              enable={
                sortDir.key === props.index && sortDir.direction === 'descend'
                  ? true
                  : false
              }
            />
          </>
        );
      }
    } else if (props.column.sorter) {
      return (
        <>
          <SortAscendingSvg
            enable={
              sortDir.key === props.index && sortDir.direction === 'ascend'
                ? true
                : false
            }
          />
          <SortDescendingSvg
            enable={
              sortDir.key === props.index && sortDir.direction === 'descend'
                ? true
                : false
            }
          />
        </>
      );
    }

    return <></>;
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg z-0">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-0">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-gray-300 z-0">
            <tr>
              {columns.map((column, index) => (
                <th
                  onClick={(e) => column.sorter && handleSort(column, index)}
                  scope="col"
                  className={`px-6 py-3 ${
                    column.sorter ? ' cursor-pointer hover:bg-gray-100' : ''
                  }`}
                >
                  <div className="flex relative">
                    <p className="left-0">{column.title}</p>
                    <div className="w-2 h-4 absolute right-6">
                      <RenderSorter column={column} index={index} />
                    </div>
                    {column.filters && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-4 h-4  absolute right-0"
                      >
                        <MyPopover
                          filters={column.filters && column.filters}
                          column={column.dataIndex}
                        />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr
                key={val.key}
                className={`bg-white border-b hover:bg-gray-50 dark:hover:bg-neutral-600 dark:bg-neutral-800 dark:border-neutral-700 ${style}`}
              >
                {columns.map((col, index) => {
                  if (index === 0) {
                    return (
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {col.render
                          ? col.render(val[col.dataIndex])
                          : val[col.dataIndex]}
                      </td>
                    );
                  } else {
                    return (
                      <td className="px-6 py-4 dark:text-gray-300">
                        {col.render
                          ? col.render(val[col.dataIndex])
                          : val[col.dataIndex]}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

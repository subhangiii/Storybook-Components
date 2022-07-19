import React, { useState } from 'react';

interface Table3Props {
  showIcon?: boolean;
  size: 'sm' | 'base' | 'lg';
  label?: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  onClick?: () => void;
}

const styles = {
  table: {
    border: ' 1px solid #ccc',
  },
  td: {
    border: '1px solid #ccc',
  },
  th: {
    border: '1px solid #ccc',
  },
  draggable: {
    cursor: 'move',
    select: 'none',
  },
  placeholder: {
    bgcolor: '#edf2f7',
    border: '2px dashed #cbd5e0',
  },

  dragging: {
    border: '1px solid #ccc',
    z: '999',
  },
};

/**
 * Primary UI component for user interaction
 */

document.addEventListener('DOMContentLoaded', function () {
  const table = document.getElementById('table');

  let draggingEle: {
    classList: { add: (arg0: string) => void; remove: (arg0: string) => void };
    parentNode: { insertBefore: (arg0: HTMLDivElement, arg1: any) => void };
    nextSibling: any;
    offsetWidth: any;
    style: {
      position: string;
      top: string;
      left: string;
      removeProperty: (arg0: string) => void;
    };
    offsetTop: any;
    offsetLeft: any;
    previousElementSibling: any;
  };
  let draggingColumnIndex: number;
  let placeholder: HTMLDivElement;
  let list: HTMLDivElement;
  let isDraggingStarted = false;

  // The current position of mouse relative to the dragging element
  let x = 0;
  let y = 0;

  const swap = function (
    nodeA: { parentNode: any; nextSibling: any },
    nodeB: {
      classList?: {
        add: (arg0: string) => void;
        remove: (arg0: string) => void;
      };
      parentNode: any;
      nextSibling?: any;
      offsetWidth?: any;
      style?: {
        position: string;
        top: string;
        left: string;
        removeProperty: (arg0: string) => void;
      };
      offsetTop?: any;
      offsetLeft?: any;
      previousElementSibling?: any;
    }
  ) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
  };

  const isOnLeft = function (
    nodeA: {
      classList?: {
        add: (arg0: string) => void;
        remove: (arg0: string) => void;
      };
      parentNode?: { insertBefore: (arg0: HTMLDivElement, arg1: any) => void };
      nextSibling?: any;
      offsetWidth?: any;
      style?: {
        position: string;
        top: string;
        left: string;
        removeProperty: (arg0: string) => void;
      };
      offsetTop?: any;
      offsetLeft?: any;
      previousElementSibling?: any;
      getBoundingClientRect?: any;
    },
    nodeB: {
      classList?: {
        add: (arg0: string) => void;
        remove: (arg0: string) => void;
      };
      parentNode?: { insertBefore: (arg0: HTMLDivElement, arg1: any) => void };
      nextSibling?: any;
      offsetWidth?: any;
      style?: {
        position: string;
        top: string;
        left: string;
        removeProperty: (arg0: string) => void;
      };
      offsetTop?: any;
      offsetLeft?: any;
      previousElementSibling?: any;
      getBoundingClientRect?: any;
    }
  ) {
    // Get the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2;
  };

  const cloneTable = function () {
    const rect = table.getBoundingClientRect();

    list = document.createElement('div');
    list.classList.add('clone-list');
    list.style.position = 'absolute';
    list.style.left = `${rect.left}px`;
    list.style.top = `${rect.top}px`;
    table.parentNode.insertBefore(list, table);

    // Hide the original table
    table.style.visibility = 'hidden';

    // Get all cells
    const originalCells = [].slice.call(table.querySelectorAll('tbody td'));

    const originalHeaderCells = [].slice.call(table.querySelectorAll('th'));
    const numColumns = originalHeaderCells.length;

    // Loop through the header cells
    originalHeaderCells.forEach(function (headerCell, headerIndex) {
      const width = parseInt(window.getComputedStyle(headerCell).width);

      // Create a new table from given row
      const item = document.createElement('div');
      item.classList.add('draggable');

      const newTable = document.createElement('table');
      newTable.setAttribute('class', 'clone-table={css1}');
      newTable.style.width = `${width}px`;

      // Header
      const th = headerCell.cloneNode(true);
      let newRow = document.createElement('tr');
      newRow.appendChild(th);
      newTable.appendChild(newRow);

      const cells = originalCells.filter(function (c, idx) {
        return (idx - headerIndex) % numColumns === 0;
      });
      cells.forEach(function (cell) {
        const newCell = cell.cloneNode(true);
        newCell.style.width = `${width}px`;
        newRow = document.createElement('tr');
        newRow.appendChild(newCell);
        newTable.appendChild(newRow);
      });

      item.appendChild(newTable);
      list.appendChild(item);
    });
  };
  const mouseDownHandler = function (e: {
    target: { offsetLeft: number; offsetTop: number };
    clientX: number;
    clientY: number;
  }): void {
    draggingColumnIndex = [].slice
      .call(table.querySelectorAll('th'))
      .indexOf(e.target);

    // Determine the mouse position
    const newLocal = (x = e.clientX - e.target.offsetLeft);
    y = e.clientY - e.target.offsetTop;

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e: { clientY: number; clientX: number }) {
    if (!isDraggingStarted) {
      isDraggingStarted = true;

      cloneTable();

      draggingEle = [].slice.call(list.children)[draggingColumnIndex];
      draggingEle.classList.add('dragging');

      // Let the placeholder take the height of dragging element
      // So the next element won't move to the left or right
      // to fill the dragging element space
      placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      draggingEle.parentNode.insertBefore(placeholder, draggingEle.nextSibling);
      placeholder.style.width = `${draggingEle.offsetWidth}px`;
    }

    // Set position for dragging element
    draggingEle.style.position = 'absolute';
    draggingEle.style.top = `${draggingEle.offsetTop + e.clientY - y}px`;
    draggingEle.style.left = `${draggingEle.offsetLeft + e.clientX - x}px`;

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;

    // The current order
    // prevEle
    // draggingEle
    // placeholder
    // nextEle
    const prevEle = draggingEle.previousElementSibling;
    const nextEle = placeholder.nextElementSibling;

    // // The dragging element is above the previous element
    // // User moves the dragging element to the left
    if (prevEle && isOnLeft(draggingEle, prevEle)) {
      // The current order    -> The new order
      // prevEle              -> placeholder
      // draggingEle          -> draggingEle
      // placeholder          -> prevEle
      swap(placeholder, draggingEle);
      swap(placeholder, prevEle);
      return;
    }

    // The dragging element is below the next element
    // User moves the dragging element to the bottom
    if (nextEle && isOnLeft(nextEle, draggingEle)) {
      // The current order    -> The new order
      // draggingEle          -> nextEle
      // placeholder          -> placeholder
      // nextEle              -> draggingEle
      swap(nextEle, placeholder);
      swap(nextEle, draggingEle);
    }
  };

  function mouseUpHandler() {
    // // Remove the placeholder
    placeholder && placeholder.parentNode.removeChild(placeholder);

    draggingEle.classList.remove('dragging');
    draggingEle.style.removeProperty('top');
    draggingEle.style.removeProperty('left');
    draggingEle.style.removeProperty('position');

    // Get the end index
    const endColumnIndex = [].slice.call(list.children).indexOf(draggingEle);

    isDraggingStarted = false;

    // Remove the `list` element
    list.parentNode.removeChild(list);

    // Move the dragged column to `endColumnIndex`
    table.querySelectorAll('tr').forEach(function (row) {
      const cells = [].slice.call(row.querySelectorAll('th, td'));
      draggingColumnIndex > endColumnIndex
        ? cells[endColumnIndex].parentNode.insertBefore(
            cells[draggingColumnIndex],
            cells[endColumnIndex]
          )
        : cells[endColumnIndex].parentNode.insertBefore(
            cells[draggingColumnIndex],
            cells[endColumnIndex].nextSibling
          );
    });

    // Bring back the table
    table.style.removeProperty('visibility');

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  table.querySelectorAll('th').forEach(function (headerCell) {
    headerCell.classList.add('draggable');
    headerCell.addEventListener('mousedown', mouseDownHandler);
  });
});

export const Table3 = ({
  showIcon = true,
  size,
  label,
  defaultChecked,
  isDisabled,
  ...props
}: Table3Props) => {
  let disabled = isDisabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  let inp_css = `border-4 border-collapse`;
  let css = `draggable: cursor-move select-none`;

  let label_css = `border-2 draggable: cursor-move select-none dragging: z-index: 999 border-2 p-1 .flex`;

  return (
    <table id="table" className={inp_css}>
      <thead>
        <tr className={label_css}>
          <th className={label_css} data-type="number">
            No.
          </th>
          <th className={label_css}>First name</th>
          <th className={label_css}>Last name</th>
          <th className={label_css}>Date of birth</th>
          <th className={label_css}>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr className={label_css}>
          <td className={label_css}>1</td>
          <td className={label_css}>Andrea</td>
          <td className={label_css}>Ross</td>
          <td className={label_css}>1985-12-24</td>
          <td className={label_css}>95945 Rodrick Crossroad</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>2</td>
          <td className={label_css}>Penelope</td>
          <td className={label_css}>Mills</td>
          <td className={label_css}>1978-8-11</td>
          <td className={label_css}>81328 Eleazar Fork</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>3</td>
          <td className={label_css}>Sarah</td>
          <td className={label_css}>Grant</td>
          <td className={label_css}>1981-5-9</td>
          <td className={label_css}>5050 Boyer Forks</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>4</td>
          <td className={label_css}>Vanessa</td>
          <td className={label_css}>Roberts</td>
          <td className={label_css}>1980-9-27</td>
          <td className={label_css}>765 Daryl Street</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>5</td>
          <td className={label_css}>Oliver</td>
          <td className={label_css}>Alsop</td>
          <td className={label_css}>1986-10-30</td>
          <td className={label_css}>11424 Ritchie Garden</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>6</td>
          <td className={label_css}>Jennifer</td>
          <td className={label_css}>Forsyth</td>
          <td className={label_css}>1983-3-13</td>
          <td className={label_css}>04640 Nader Ramp</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>7</td>
          <td className={label_css}>Michelle</td>
          <td className={label_css}>King</td>
          <td className={label_css}>1980-8-29</td>
          <td className={label_css}>272 Alysa Fall</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>8</td>
          <td className={label_css}>Steven</td>
          <td className={label_css}>Kelly</td>
          <td className={label_css}>1989-8-6</td>
          <td className={label_css}>5749 Foster Pike</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>9</td>
          <td className={label_css}>Julian</td>
          <td className={label_css}>Ferguson</td>
          <td className={label_css}>1981-9-17</td>
          <td className={label_css}>6196 Wilkinson Parkways</td>
        </tr>
        <tr className={label_css}>
          <td className={label_css}>10</td>
          <td className={label_css}>Chloe</td>
          <td className={label_css}>Ince</td>
          <td className={label_css}>1983-10-28</td>
          <td className={label_css}>9069 Daniel Shoals</td>
        </tr>
      </tbody>
    </table>
  );
};

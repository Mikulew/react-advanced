import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ItemsList.module.scss';

const items = [
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit1.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit2.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit3.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit4.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit5.`,
];

function ItemsList() {
  const [toggleState, setToggleState] = useState(false);
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: toggleState,
  });

  return (
    <div>
      {toggleState ? (
        <button
          type="button"
          className="button is-dark is-large"
          onClick={() => setToggleState(false)}
        >
          Hide
        </button>
      ) : (
        <button
          type="button"
          className="button is-dark is-large"
          onClick={() => setToggleState(true)}
        >
          Show
        </button>
      )}
      <ul className={listClass}>
        {items.map(item => (
          <li key={item} className="notification is-primary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;

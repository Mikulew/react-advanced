import React from 'react';
import cx from 'classnames';
import styles from './ItemsList.module.scss';
import Collapse from '../../providers/Collapse';

const items = [
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit1.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit2.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit3.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit4.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit5.`,
];

function ItemsList({ isCollapsed, toggle }) {
  const listClass = isCollapsed =>
    cx(styles.list, {
      [styles.isCollapsed]: isCollapsed,
    });

  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <div>
          <button type="button" className="button is-dark is-large" onClick={toggle}>
            Collapse
          </button>
          <ul className={listClass(isCollapsed)}>
            {items.map(item => (
              <li key={item} className="notification is-primary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
}

export default ItemsList;

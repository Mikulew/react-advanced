import React from 'react';
import cx from 'classnames';
import { compose } from 'recompose';
import styles from './Columns.module.scss';
import withCollapse from '../../hocs/withCollapse';
import withAuth from '../../hocs/withAuth';

const Columns = ({ isCollapsed, toggle, isAuthorised, toggleAuth }) => {
  const rowClass = cx('columns', {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <div className="columns">
      <p>Authorised: {isAuthorised.toString()}</p>
      <div className="column">
        <button type="button" className="button is-dark is-large" onClick={toggle}>
          Collapse
        </button>
        <button type="button" className="button is-warning is-large" onClick={toggleAuth}>
          {isAuthorised ? 'logout' : 'login'}
        </button>
        {isAuthorised ? (
          <div className={rowClass}>
            <div className="column">
              <div className="notification is-primary">First column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Second column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Third column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Fourth column</div>
            </div>
          </div>
        ) : (
          <h2 className="title is-2">You must sign in to see this content</h2>
        )}
      </div>
    </div>
  );
};

export default compose(withCollapse, withAuth)(Columns);

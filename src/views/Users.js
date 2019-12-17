import React from 'react';
import * as MultiStep from '../components/MultiStep/MultiStep';

const Users = () => (
  <div>
    <h2 className="title is-3">Users</h2>
    <MultiStep.Wizard>
      <MultiStep.Page pageIndex={1}>
        <div className="box">
          <p className="title">What's your name</p>
          <input type="text" name="name" placeholder="name" />
        </div>
      </MultiStep.Page>
      <MultiStep.Page pageIndex={2}>
        <div className="box">
          <p className="title">And your surname?</p>
          <input type="text" name="surname" placeholder="surname" />
        </div>
      </MultiStep.Page>
      <MultiStep.Page pageIndex={3}>
        <div className="box">
          <p className="title">What about your phone number?</p>
          <input type="text" name="phone" placeholder="phone" />
        </div>
      </MultiStep.Page>
      <MultiStep.Controls />
    </MultiStep.Wizard>
  </div>
);

export default Users;

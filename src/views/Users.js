import React from 'react';
import MultiStep, { Page, Controls } from '../components/MultiStep/MultiStep';

const Users = () => (
  <div>
    <h2 className="title is-3">Users</h2>
    <MultiStep>
      <Page>Page 1</Page>
      <Page>Page 2</Page>
      <Page>Page 3</Page>
      <Controls />
    </MultiStep>
  </div>
);

export default Users;

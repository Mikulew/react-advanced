import React from 'react';

export const Page = ({ children }) => (<div>{children}</div>);

export const Controls = () => (
  <div>
    <button type="button">Previous</button>
    <button type="button">Next</button>
    {/* <button>Submit</button> */}
  </div>
);

const MultiStep = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default MultiStep;

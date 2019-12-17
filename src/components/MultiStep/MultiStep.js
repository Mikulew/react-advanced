import React, { useState, useContext } from 'react';

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage } = useContext(WizardContext);
  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { currentPage, changePage } = useContext(WizardContext);

  return (
    <div>
      <button className="button is-small" type="button" onClick={() => changePage(currentPage - 1)}>
        Previous
      </button>
      <button className="button is-small" type="button" onClick={() => changePage(currentPage + 1)}>
        Next
      </button>
      {/* <button>Submit</button> */}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider value={{ currentPage, changePage }}>{children}</WizardContext.Provider>
  );
};

export { Page, Controls, Wizard };

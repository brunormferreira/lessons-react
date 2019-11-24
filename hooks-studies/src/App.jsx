import React, { Fragment } from 'react';
import Provider from './state/provider';
import Context from './state/context';
import './App.css';

const Building = () => {
  return <Floor1 />;
};

//Floor1 Component
const Floor1 = () => {
  return <Floor2 />;
};

//Floor2 Component
const Floor2 = () => {
  return <Floor3 />;
};

//Floor3 Component
const Floor3 = () => {
  return <Floor7 />;
};

//Floor 7 Component
const Floor7 = () => {
  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <h3>Welcome to Floor 7</h3>
          <p>
            <strong>Company Name: </strong>
            {context.data.companyName}
          </p>
          <p>
            <strong>Recipient Name: </strong>
            {context.data.recipientName}
          </p>
          <p style={{color: context.data.style}}>
            <strong>Package: </strong>
            {context.data.package}
          </p>
          <p>
            <strong>Delivery Status: </strong>
            {context.data.deliveryStatus}
          </p>
          <button onClick={context.updateDeliveryStatus}>
            Update Delivery Status
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

function App() {
  return (
    <div className='App'>
      <h1>Hello!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Provider>
        <Building />
      </Provider>
    </div>
  );
}

export default App;
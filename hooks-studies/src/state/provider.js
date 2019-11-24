import React, { useState } from 'react';
import PackageContext from './context';

const provider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    companyName: 'Delivery Pizzaria',
    recipientName: 'Mr Bruno Ramires',
    package: 'Lego Computer',
    deliveryStatus: 'Delivery In Progress...',
    style: 'green'
  });

  return (
    <PackageContext.Provider
      value={{
        data: state,
        updateDeliveryStatus: () => {
          setState({ ...state, deliveryStatus: 'Delivered' });
        }
      }}
    >
      { children }
    </PackageContext.Provider>
  );
};

export default provider;


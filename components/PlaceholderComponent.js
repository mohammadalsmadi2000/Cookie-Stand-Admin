import React from 'react';

const PlaceholderComponent = ({ data }) => {

  const jsonString = JSON.stringify(data, null, 2); 
  return (
    <div>
      <h2>Last Created Cookie Stand:</h2>
      <pre>{jsonString}</pre>
    </div>
  );
};

export default PlaceholderComponent;

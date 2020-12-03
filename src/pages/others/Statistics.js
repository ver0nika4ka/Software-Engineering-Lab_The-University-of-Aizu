
import React from 'react';
import Iframe from 'react-iframe'

function Statistics() {
  return (
    <div className="Statistics">
      <Iframe url="https://ga-api.herokuapp.com"
        width="100%"
        height="600px"
        display="initial"
      />
    </div>
  );
}

export default Statistics;


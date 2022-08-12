import React from 'react';

const Popup = ({ id, content }) => {
  return (
    <div className="popup" id="">
      <div className="close">close</div>
      <div>{content}</div>
    </div>
  );
};

export default Popup;

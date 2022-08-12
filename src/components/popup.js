import React, { useState } from 'react';

const Popup = ({ id, content, top, left }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="popup"
      id={id}
      style={{
        top: top,
        left: left,
        display: visible ? 'block' : 'none',
      }}
    >
      <div
        aria-hidden="true"
        className="popup-close"
        onClick={() => setVisible(false)}
      >
        close
      </div>
      <div className="popup-content">{content}</div>
    </div>
  );
};

export default Popup;

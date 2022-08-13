import React from 'react';
import Draggable from 'react-draggable';

const Popup = ({ id, content, top, left, visible, setVisible }) => {
  return (
    <Draggable>
      <div
        className="popup"
        id={id}
        style={{
          top: top,
          left: left,
          display: visible ? 'block' : 'none',
        }}
      >
        <div className="popup-close">
          <button aria-hidden="true" onClick={() => setVisible(false)}>
            close
          </button>
        </div>
        <div className="popup-content">{content}</div>
      </div>
    </Draggable>
  );
};

export default Popup;

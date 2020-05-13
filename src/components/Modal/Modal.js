import React from 'react';

const Modal = ({ onClose = () => {}, id = 'modal-wrapper', children }) => {
  const handleOutsideClick = ev => {
    if (ev.target.id === id) onClose();
  };

  return (
    <div className="modal-wrapper" id={id} onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

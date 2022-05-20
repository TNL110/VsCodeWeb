import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal}) => {
  // return <div>i'm modal</div>;
  useEffect(()=>{
    setTimeout(()=>{
      closeModal();
    },3000)
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
};

export default Modal;
